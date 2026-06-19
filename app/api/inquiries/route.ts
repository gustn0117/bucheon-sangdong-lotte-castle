import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ADMIN_PW = process.env.ADMIN_PASSWORD || "1234";
const SESSION_TOKEN = process.env.ADMIN_SESSION_SECRET || "lottecastle-admin-ok";
const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "inquiries.json");

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  type: string;
  createdAt: string;
};

async function readAll(): Promise<Inquiry[]> {
  try {
    const txt = await fs.readFile(FILE, "utf8");
    const data = JSON.parse(txt);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeAll(list: Inquiry[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2), "utf8");
}

function authed(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === SESSION_TOKEN;
}

// Public: a visitor submits an inquiry.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const name = body?.name ? String(body.name).trim().slice(0, 50) : "";
  const phone = body?.phone ? String(body.phone).trim().slice(0, 20) : "";
  const type = body?.type ? String(body.type).trim().slice(0, 20) : "";
  if (!name || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const list = await readAll();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  list.push({ id, name, phone, type, createdAt: new Date().toISOString() });
  await writeAll(list);
  return NextResponse.json({ ok: true });
}

// Admin: list all inquiries (newest first).
export async function GET(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const list = await readAll();
  return NextResponse.json({ inquiries: [...list].reverse() });
}

// Admin: delete one inquiry by id.
export async function DELETE(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "no id" }, { status: 400 });
  const list = await readAll();
  await writeAll(list.filter((x) => x.id !== id));
  return NextResponse.json({ ok: true });
}

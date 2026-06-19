import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ADMIN_PW = process.env.ADMIN_PASSWORD || "1234";
const SESSION_TOKEN = process.env.ADMIN_SESSION_SECRET || "lottecastle-admin-ok";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || body.password !== ADMIN_PW) {
    return NextResponse.json({ error: "wrong" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", SESSION_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}

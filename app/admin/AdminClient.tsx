"use client";

import { useCallback, useEffect, useState } from "react";

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  birth: string;
  type: string;
  createdAt: string;
};

const TYPE_LABEL: Record<string, string> = {
  "84": "전용 84㎡",
  "113": "전용 113㎡",
  "121": "전용 121㎡",
  penthouse: "펜트하우스",
  undecided: "미정 / 상담희망",
};

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AdminClient() {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [list, setList] = useState<Inquiry[]>([]);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    const r = await fetch("/api/inquiries", { cache: "no-store" });
    if (r.ok) {
      const d = await r.json();
      setList(d.inquiries || []);
      setAuthed(true);
    } else {
      setAuthed(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (r.ok) {
      setPw("");
      await load();
    } else {
      setErr("비밀번호가 올바르지 않습니다.");
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setList([]);
  }

  async function remove(id: string) {
    if (!confirm("이 문의를 삭제할까요?")) return;
    const r = await fetch(`/api/inquiries?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    if (r.ok) setList((prev) => prev.filter((x) => x.id !== id));
  }

  function downloadCsv() {
    const head = ["등록일시", "성함", "연락처", "생년월일", "관심평형"];
    const rows = list.map((x) => [
      fmt(x.createdAt),
      x.name,
      x.phone,
      x.birth || "",
      TYPE_LABEL[x.type] || x.type,
    ]);
    const csv =
      "﻿" +
      [head, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "inquiries.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="admin">
        <div className="admin-card">불러오는 중…</div>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="admin">
        <form className="admin-login" onSubmit={login}>
          <h1>문의 관리</h1>
          <p>관리자 비밀번호를 입력하세요.</p>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호"
            autoFocus
          />
          {err && <div className="admin-err">{err}</div>}
          <button type="submit">로그인</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="admin-head">
        <div>
          <h1>문의 관리</h1>
          <span className="admin-count">총 {list.length}건</span>
        </div>
        <div className="admin-actions">
          <button onClick={load}>새로고침</button>
          <button onClick={downloadCsv} disabled={!list.length}>
            CSV 내보내기
          </button>
          <button className="ghost" onClick={logout}>
            로그아웃
          </button>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="admin-card">아직 등록된 문의가 없습니다.</div>
      ) : (
        <div className="admin-tablewrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>등록일시</th>
                <th>성함</th>
                <th>연락처</th>
                <th>생년월일</th>
                <th>관심 평형</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((x) => (
                <tr key={x.id}>
                  <td>{fmt(x.createdAt)}</td>
                  <td>{x.name}</td>
                  <td>
                    <a href={`tel:${x.phone}`}>{x.phone}</a>
                  </td>
                  <td>{x.birth || "-"}</td>
                  <td>{TYPE_LABEL[x.type] || x.type || "-"}</td>
                  <td>
                    <button className="del" onClick={() => remove(x.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

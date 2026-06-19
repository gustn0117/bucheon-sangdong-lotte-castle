"use client";

import { useState, type FormEvent } from "react";
import { PLAN_OPTIONS } from "../content";

function formatPhone(raw: string) {
  const v = raw.replace(/\D/g, "").slice(0, 11);
  if (v.length > 7) return v.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
  if (v.length > 3) return v.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  return v;
}

const ERR = "#c0492f";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("84");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({ name: false, phone: false, agree: false });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = {
      name: !name.trim(),
      phone: phone.replace(/\D/g, "").length < 10,
      agree: !agree,
    };
    setErrors(next);
    if (next.name || next.phone || next.agree) return;

    setSending(true);
    setServerError(false);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone, type }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setServerError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="form-card">
      {!submitted ? (
        <form onSubmit={onSubmit} noValidate>
          <h3>관심고객 등록</h3>
          <p className="fh-sub">아래 정보를 남겨주시면 순차적으로 연락드리겠습니다.</p>

          <div className="field">
            <label htmlFor="name">
              성함 <span className="req">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="성함을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={errors.name ? { borderColor: ERR } : undefined}
            />
          </div>

          <div className="field two">
            <div className="f field" style={{ margin: 0 }}>
              <label htmlFor="phone">
                연락처 <span className="req">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                inputMode="numeric"
                placeholder="010-0000-0000"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                style={errors.phone ? { borderColor: ERR } : undefined}
              />
            </div>
            <div className="f field" style={{ margin: 0 }}>
              <label htmlFor="type">관심 주택형</label>
              <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                {PLAN_OPTIONS.map((opt) => (
                  <option value={opt.value} key={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="consent" htmlFor="agree" style={errors.agree ? { color: "#e0855f" } : undefined}>
            <input type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>
              개인정보 수집·이용 및 마케팅 정보 수신에 동의합니다. (성함·연락처는 분양 상담 목적에 한해
              이용되며, 목적 달성 시 파기됩니다.) <a href="#info">자세히</a>
            </span>
          </label>

          {serverError && (
            <div className="form-err">일시적인 오류로 등록에 실패했습니다. 잠시 후 다시 시도해 주세요.</div>
          )}
          <button type="submit" className="submit" disabled={sending}>
            {sending ? "등록 중…" : "관심고객 등록하기"}
          </button>
        </form>
      ) : (
        <div className="form-success show">
          <div className="chk">
            <svg viewBox="0 0 24 24">
              <path d="M4 12l5 5L20 6" />
            </svg>
          </div>
          <h3>등록이 완료되었습니다</h3>
          <p>
            소중한 관심에 감사드립니다.
            <br />
            분양 일정이 확정되는 대로 가장 먼저 연락드리겠습니다.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Zoom from "./Zoom";
import { PLANS, UNIT_GROUPS, UNIT_TOTAL } from "../content";

export default function FloorPlans() {
  const [active, setActive] = useState<"84" | "128">("84");

  return (
    <section className="sec plans" id="plans">
      <div className="wrap">
        <div className="sec-head">
          <div className="top">
            <span className="sec-num">03</span>
            <span className="eyebrow">Unit Plan</span>
          </div>
          <Reveal as="h2" className="sec-title">
            삶의 깊이를 담은 <b>공간 설계</b>
          </Reveal>
          <Reveal as="p" className="sec-lead" delay={100}>
            전용 84㎡부터 113㎡·121㎡, 그리고 펜트하우스까지 — 총 12개 주택형, 약 1,859세대로 구성됩니다.
            아래는 대표 평면이며, 전체 주택형 구성은 하단에서 확인하실 수 있습니다.
          </Reveal>
        </div>

        <div className="tabs" role="tablist">
          {PLANS.map((plan) => (
            <button
              key={plan.key}
              className={`tab${active === plan.key ? " active" : ""}`}
              role="tab"
              aria-selected={active === plan.key}
              onClick={() => setActive(plan.key)}
            >
              {plan.tab}
            </button>
          ))}
        </div>

        {PLANS.map((plan) => (
          <div className={`plan-panel${active === plan.key ? " show" : ""}`} data-panel={plan.key} key={plan.key}>
            <div className="plan-img">
              <Zoom full={plan.img} caption={`${plan.title}타입 평면도`}>
                <Image
                  src={plan.img}
                  alt={`${plan.title}타입 평면도`}
                  width={1160}
                  height={750}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Zoom>
            </div>
            <div className="plan-info">
              <span className="ptype">{plan.ptype}</span>
              <h3>
                {plan.title}
                <small>{plan.unit}</small>
              </h3>
              <p className="desc">{plan.desc}</p>
              <div className="plan-feat">
                {plan.feats.map((feat) => (
                  <div key={feat.k}>
                    <div className="k">{feat.k}</div>
                    <div className="v">{feat.v}</div>
                  </div>
                ))}
              </div>
              <div className="plan-rooms">
                {plan.rooms.map((room) => (
                  <span key={room}>{room}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="unit-types">
          <Reveal as="h3">
            주택형 구성 <span>총 {UNIT_TOTAL.toLocaleString()}세대 · 12개 타입</span>
          </Reveal>
          <div className="ut-groups">
            {UNIT_GROUPS.map((g) => (
              <Reveal className="ut-group" key={g.area}>
                <div className="ut-ghead">
                  <b>{g.area}</b>
                  <span>{g.total.toLocaleString()}세대</span>
                </div>
                <div className="ut-chips">
                  {g.subs.map((s) => (
                    <span key={s.t}>
                      {s.t}
                      <i>{s.n}세대</i>
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="comm-cap" style={{ marginTop: 40, color: "var(--on-light-mut)" }}>
          ※ 평면도는 타입별 대표 평면이며, 전용/공급 면적·타입 구성·발코니 확장 여부 등 세부 사항은
          입주자모집공고 기준으로 확정됩니다. 이미지는 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setHidden(true);
            if (onDone) onDone();
          }, 350);
          return 100;
        }
        return next;
      });
    }, 160);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        transition: "opacity .7s ease, visibility .7s ease",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <div className="eyebrow" style={{ marginBottom: 0 }}>
        Kona AI yükleniyor
      </div>
      <div
        style={{
          width: 180,
          height: 2,
          background: "var(--accent-soft)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "var(--accent)",
            transition: "width .2s ease",
          }}
        />
      </div>
    </div>
  );
}

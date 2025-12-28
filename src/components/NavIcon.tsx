"use client";

import React from "react";

export default function NavIcon({
  onClick,
  open
}: {
  onClick: () => void;
  open: boolean;
}) {
  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.06)",
        background: open ? "rgba(0,0,0,0.04)" : "transparent"
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {open ? (
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

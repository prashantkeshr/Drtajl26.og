"use client";

import { useState } from "react";
import Link from "next/link";

export default function EcosystemBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-6 bg-black/80 backdrop-blur-sm border-b border-gold/20 px-4 py-2 text-xs text-gray-light">
      <span className="text-gold font-semibold">DHURTA ECOSYSTEM</span>
      <Link href="https://dhurta.com" className="hover:text-gold transition-colors">
        Products → dhurta.com
      </Link>
      <Link href="https://dhurta.in" className="hover:text-gold transition-colors">
        India → dhurta.in
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-gray-dark hover:text-white transition-colors"
      >
        ✕
      </button>
    </div>
  );
}

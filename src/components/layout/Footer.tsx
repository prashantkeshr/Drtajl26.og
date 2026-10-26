"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks, uiLanguages } from "@/lib/data";
import { LinkedInIcon, XIcon, InstagramIcon, GitHubIcon } from "@/components/ui/SocialIcons";

const ecosystemLinks = [
  { label: "dhurta.com — Products", href: "https://dhurta.com" },
  { label: "Dhurta Browser on GitHub", href: "https://github.com/prashantkeshr/drtajl26.n" },
  { label: "Browser Releases", href: "https://github.com/prashantkeshr/drtajl26.n/releases" },
  { label: "Group Ventures", href: "/ventures" },
];

const scriptSnippets = [
  { text: "धूर्त", font: "font-devanagari" },
  { text: "ধূর্ত", font: "font-bengali" },
  { text: "دهورتا", font: "font-arabic" },
  { text: "达尔塔", font: "font-sc" },
  { text: "ダルタ", font: "font-jp" },
  { text: "다르타", font: "font-kr" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 overflow-hidden border-b border-white/5 px-6 py-3 text-2xl font-semibold text-white/5 lg:px-8">
        {[...scriptSnippets, ...scriptSnippets].map((s, i) => (
          <span key={i} className={s.font}>
            {s.text}
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/dhurta-logo.png"
                alt="Dhurta emblem"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-3xl font-bold text-white">
                DHU<span className="text-gradient-gold">RTA</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-light">
              The clever choice for global digital transformation. From Mumbai to
              Manhattan, London to Lagos — we build solutions that outsmart
              challenges, anywhere in the world.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: LinkedInIcon, href: "#" },
                { Icon: XIcon, href: "#" },
                { Icon: InstagramIcon, href: "#" },
                { Icon: GitHubIcon, href: "https://github.com/prashantkeshr/drtajl26.n" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  {...(href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-light transition-all hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Ecosystem
            </h4>
            <ul className="space-y-2.5">
              {ecosystemLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ) : (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Global Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {uiLanguages.map((lang) => (
                <motion.span
                  key={lang.code}
                  whileHover={{ y: -2, color: "#C9A84C" }}
                  className="cursor-pointer rounded-full border border-white/10 px-2.5 py-1 text-xs text-gray-light transition-colors"
                >
                  {lang.label}
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-light">
              contact@dhurta.org
              <br />
              Global Headquarters — Remote-first, everywhere.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-light sm:flex-row">
          <p>© {new Date().getFullYear()} DHURTA. All rights reserved.</p>
          <p className="font-devanagari text-sm text-gold/70">
            धूर्तः — clever, global, trusted.
          </p>
        </div>
      </div>
    </footer>
  );
}

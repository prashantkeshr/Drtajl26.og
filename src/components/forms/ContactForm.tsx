"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Upload, AlertCircle } from "lucide-react";
import { uiLanguages } from "@/lib/data";
import Button from "@/components/ui/Button";

const services = [
  "Web & App Development",
  "Digital Strategy",
  "Brand & UX Design",
  "Cloud & Infrastructure",
  "AI & Automation",
  "Growth & Performance Marketing",
];

const budgets = ["Under $10k", "$10k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Just exploring"];
const hearAbout = ["Search Engine", "Social Media", "Referral", "LinkedIn", "Press / Media", "Other"];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-light/50 outline-none transition-colors focus:border-gold/50 focus:bg-white/[0.07]";
const labelClasses = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-light";

export default function ContactForm({ full = false }: { full?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
      formData.append(
        "subject",
        `New dhurta.org inquiry — ${formData.get("service") ?? "General"}`
      );
      formData.append("from_name", String(formData.get("name") ?? "DHURTA Site"));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send message. Please email contact@dhurta.org directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card flex flex-col items-center justify-center gap-4 rounded-2xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
        >
          <CheckCircle2 size={56} className="text-teal" />
        </motion.div>
        <h3 className="font-display text-2xl font-bold text-white">
          Message Received.
        </h3>
        <p className="max-w-sm text-sm text-gray-light">
          Thank you for reaching out to DHURTA. Our global team reviews every
          message — expect a reply within 4 business hours, in your time zone.
        </p>
        <p className="font-devanagari text-gold/70">
          धूर्तः — we&apos;re clever about solving problems, anywhere in the world.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8">
      {/* Anti-spam honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Full Name *</label>
          <input
            required
            name="name"
            type="text"
            className={inputClasses}
            placeholder="Jane Appleseed"
          />
        </div>
        <div>
          <label className={labelClasses}>Email Address *</label>
          <input
            required
            name="email"
            type="email"
            className={inputClasses}
            placeholder="jane@company.com"
          />
        </div>

        {full && (
          <>
            <div>
              <label className={labelClasses}>Phone Number</label>
              <div className="flex gap-2">
                <select name="phone_code" className={`${inputClasses} w-24 shrink-0`}>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+91</option>
                  <option>+81</option>
                  <option>+971</option>
                  <option>+234</option>
                  <option>+55</option>
                </select>
                <input
                  name="phone"
                  type="tel"
                  className={inputClasses}
                  placeholder="000 000 0000"
                />
              </div>
            </div>
            <div>
              <label className={labelClasses}>Company Name</label>
              <input
                name="company"
                type="text"
                className={inputClasses}
                placeholder="Acme Inc."
              />
            </div>
            <div>
              <label className={labelClasses}>Country / Region *</label>
              <input
                required
                name="country"
                type="text"
                className={inputClasses}
                placeholder="e.g. India"
              />
            </div>
            <div>
              <label className={labelClasses}>Preferred Language *</label>
              <select required name="language" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select a language
                </option>
                {uiLanguages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className={full ? "" : "sm:col-span-2"}>
          <label className={labelClasses}>Service Interested In *</label>
          <select required name="service" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {full && (
          <>
            <div>
              <label className={labelClasses}>Project Budget</label>
              <select name="budget" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClasses}>Project Timeline</label>
              <select name="timeline" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select a timeline
                </option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label className={labelClasses}>Tell Us About Your Project *</label>
          <textarea
            required
            name="message"
            minLength={20}
            rows={full ? 5 : 3}
            className={inputClasses}
            placeholder="What are you building, and what does success look like?"
          />
        </div>

        {full && (
          <>
            <div>
              <label className={labelClasses}>How Did You Hear About Us?</label>
              <select name="hear_about" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                {hearAbout.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClasses}>Time Zone</label>
              <input
                name="timezone"
                type="text"
                className={inputClasses}
                placeholder="e.g. GMT+5:30"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClasses}>Attach a File (optional, max 10MB)</label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/15 px-4 py-3 text-sm text-gray-light transition-colors hover:border-gold/40">
                <Upload size={16} />
                {fileName ?? "PDF, DOC, PNG, or JPG"}
                <input
                  type="file"
                  name="attachment"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                />
              </label>
            </div>
          </>
        )}
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={15} className="shrink-0" />
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="mt-7 w-full sm:w-auto"
        icon={<Send size={15} />}
      >
        {submitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

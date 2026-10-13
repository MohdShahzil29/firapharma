"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const types = ["Product enquiry", "Distributor / PCD franchise", "Bulk / institutional order", "Other"];

// No backend yet: the form opens the visitor's mail app with everything pre-filled.
export default function ContactForm() {
  const [type, setType] = useState(types[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `City: ${f.get("city")}`,
      `Enquiry type: ${type}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${type} — ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-slate-200 bg-paper p-6 sm:p-10">
      <h2 className="text-2xl font-bold text-navy-800">Send us an enquiry</h2>
      <p className="mt-1 text-slate-500">We usually reply within one working day.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => setType(t)}
            className={`rounded-md border px-3.5 py-2 text-sm font-semibold transition ${
              type === t ? "border-navy-800 bg-navy-800 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-navy-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full name *" className={field} />
        <input name="phone" required type="tel" placeholder="Phone *" className={field} />
        <input name="email" type="email" placeholder="Email" className={field} />
        <input name="city" placeholder="City / State" className={field} />
        <textarea name="message" rows={5} placeholder="Tell us what you need…" className={`${field} resize-none sm:col-span-2`} />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-brand-500 py-3.5 font-bold text-white transition hover:bg-brand-600"
      >
        Send Enquiry
      </button>
      {sent && (
        <p className="mt-4 text-center text-sm font-semibold text-brand-600">
          Your mail app should open with the details filled in — just hit send.
        </p>
      )}
    </form>
  );
}

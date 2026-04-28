"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  size: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", company: "", size: "", message: "" };

const INPUT_BASE =
  "w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#1A56DB]/40 focus:border-[#1A56DB]";

const CONTACT_INFO = [
  { icon: "✉", label: "enterprise@accredian.com" },
  { icon: "☎", label: "+91 9818 971 972" },
  { icon: "⊙", label: "Gurugram, Haryana, India" },
];

const TEAM_SIZE_OPTIONS = ["1–50", "51–200", "201–1,000", "1,000+"];

export default function ContactSection() {
  const [form, setForm]           = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submissionInfo, setSubmissionInfo] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setSubmissionInfo("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Unable to submit request. Please try again.");
        return;
      }

      if (data.destination === "memory") {
        setSubmissionInfo("Saved to demo API store (in-memory).");
      } else if (data.destination === "webhook+memory" && data.forwarded) {
        setSubmissionInfo("Saved and forwarded to configured webhook.");
      } else if (data.destination === "webhook+memory") {
        setSubmissionInfo("Saved in demo API store; webhook forwarding failed.");
      }

      setSubmitted(true);
      setForm(INITIAL);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: info ────────────────────────── */}
          <div className="lg:pt-2">
            <span className="section-label">Get In Touch</span>
            <h2 className="text-heading text-slate-900 mb-4">
              Ready to transform{" "}
              <span className="gradient-text">your workforce?</span>
            </h2>
            <p className="text-subheading mb-10">
              Tell us about your organization and we&apos;ll design a program
              for you. Our enterprise team responds within 24 hours.
            </p>

            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#1A56DB] shrink-0">
                    {icon}
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <span className="text-xl shrink-0">🔒</span>
              <p className="text-slate-500 text-xs leading-relaxed">
                Your information is secure. We never share your data and will only use it to follow up on your demo request.
              </p>
            </div>
          </div>

          {/* ── Right: form ───────────────────────── */}
          <div className="card p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-3xl mx-auto mb-5">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-500 text-sm">Our enterprise team will contact you within 24 hours.</p>
                {submissionInfo && <p className="text-xs text-slate-500 mt-2">{submissionInfo}</p>}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                    setSubmissionInfo("");
                  }}
                  className="mt-6 text-[#1A56DB] text-sm font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Request a Free Demo</h3>
                <p className="text-slate-400 text-xs mb-5">Fill in the details below and we&apos;ll be in touch.</p>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                    {error}
                  </p>
                )}

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </span>
                    <input
                      name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Priya Sharma"
                      className={INPUT_BASE}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </span>
                    <input
                      name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="priya@company.com"
                      className={INPUT_BASE}
                    />
                  </label>
                </div>

                {/* Company + Size */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-xs font-semibold text-slate-700 mb-1.5">Company</span>
                    <input
                      name="company" type="text"
                      value={form.company} onChange={handleChange}
                      placeholder="Infosys Ltd."
                      className={INPUT_BASE}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-slate-700 mb-1.5">Team Size</span>
                    <select
                      name="size"
                      value={form.size} onChange={handleChange}
                      className={`${INPUT_BASE} cursor-pointer`}
                    >
                      <option value="">Select size</option>
                      {TEAM_SIZE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                </div>

                {/* Message */}
                <label className="block">
                  <span className="block text-xs font-semibold text-slate-700 mb-1.5">How can we help?</span>
                  <textarea
                    name="message" rows={3}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your upskilling goals..."
                    className={`${INPUT_BASE} resize-none`}
                  />
                </label>

                <Button type="submit" variant="primary" size="md" className="w-full justify-center" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Request"}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>

                <p className="text-center text-[11px] text-slate-400">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-[#1A56DB] hover:underline">Privacy Policy</a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

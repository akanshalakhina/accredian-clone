import { TESTIMONIALS } from "@/lib/data";
import type { Testimonial } from "@/types";

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, company, avatar, quote }: Omit<Testimonial, "id">) {
  return (
    <article className="card p-7 flex flex-col gap-5">
      <StarRating />

      <blockquote className="text-slate-700 text-[15px] leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-3 pt-5 border-t border-slate-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: "linear-gradient(135deg, #1A56DB, #0D9488)" }}
          aria-hidden
        >
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{role} · {company}</p>
        </div>
      </footer>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFC]">
      <div className="section-container">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="section-label">What Leaders Say</span>
          <h2 className="text-heading text-slate-900">
            Trusted by <span className="gradient-text">L&amp;D leaders across India</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#1342B8] to-[#0D9488] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Join 500+ companies already growing with Accredian
            </p>
            <p className="text-blue-100 text-sm mt-1.5">
              From startups to Fortune 500s — we scale with your ambition.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white text-[#1A56DB] font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-slate-50 transition-colors duration-150"
          >
            Book a Free Demo →
          </a>
        </div>
      </div>
    </section>
  );
}

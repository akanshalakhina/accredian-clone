import { TRUSTED_COMPANIES } from "@/lib/data";

export default function TrustedBySection() {
  const doubled = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section id="companies" className="py-14 bg-white border-y border-slate-100">
      <div className="section-container mb-7">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.15em]">
          Trusted by leading organizations
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center h-11 px-6 rounded-lg bg-slate-50 border border-slate-100 shrink-0 transition-colors hover:border-blue-100 hover:bg-blue-50/50"
            >
              <span className="text-slate-500 font-semibold text-sm tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

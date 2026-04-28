import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-[70vh] bg-[#F8FAFC] pt-28 pb-16">
      <div className="section-container max-w-lg">
        <div className="card p-8">
          <p className="section-label">Account Access</p>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Login to Accredian Enterprise</h1>
          <p className="text-slate-500 text-sm mb-6">
            This is a demo login screen for the assignment clone.
          </p>

          <form className="space-y-4">
            <label className="block">
              <span className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email</span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB]/40 focus:border-[#1A56DB]"
              />
            </label>

            <label className="block">
              <span className="block text-xs font-semibold text-slate-700 mb-1.5">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB]/40 focus:border-[#1A56DB]"
              />
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] focus-visible:ring-offset-2 active:scale-[0.98] whitespace-nowrap px-5 py-2.5 text-sm bg-[#1A56DB] text-white hover:bg-[#1342B8] shadow-[0_2px_12px_rgba(26,86,219,0.30)]"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-6">
            Need enterprise onboarding?{" "}
            <Link href="/#contact" className="text-[#1A56DB] font-semibold hover:underline">Talk to our team</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

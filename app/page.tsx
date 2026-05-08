export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For remote developers in Discord communities
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Block Discord during{" "}
          <span className="text-[#58a6ff]">focus hours</span>{" "}
          automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          A browser extension that monitors your calendar and silently blocks Discord during focus blocks — with an emergency override when you truly need it.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start blocking for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with Google Calendar &amp; Outlook.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">2.4h</div>
            <div className="text-sm text-[#8b949e] mt-1">avg extra focus time per day</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">1-click</div>
            <div className="text-sm text-[#8b949e] mt-1">emergency override</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">Zero</div>
            <div className="text-sm text-[#8b949e] mt-1">manual setup needed</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Automatic calendar sync (Google & Outlook)",
              "Discord domain blocking during focus blocks",
              "Emergency override with usage log",
              "Custom block schedules & exceptions",
              "Works on Chrome, Firefox, Edge",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9] text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started — $9/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it know when I have a focus block?</h3>
            <p className="text-[#8b949e] text-sm">The extension connects to your Google Calendar or Outlook and looks for events tagged as focus time (e.g. "Focus", "Deep Work", "No Meetings"). You can customize which keywords trigger blocking.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What if I genuinely need Discord during a block?</h3>
            <p className="text-[#8b949e] text-sm">Click the extension icon and hit "Emergency Override". Discord unblocks for 10 minutes. Every override is logged so you can review your patterns later.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which browsers are supported?</h3>
            <p className="text-[#8b949e] text-sm">Chrome, Firefox, and Edge are fully supported. The extension uses the standard WebExtensions API so it works across all Chromium-based browsers too.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} Discord Focus Time Blocker. All rights reserved.
      </footer>
    </main>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white">
      {/* Large CTA section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/40">
            Get started
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to transform your
            <br />
            bioprocess R&D?
          </h2>
          <p className="mb-10 text-lg text-white/50">
            Get in touch with our team to see Bioqore in action.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@bioqore.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0a0a0a] transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Start working with Bioqore
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="white" />
              <circle cx="10" cy="14" r="4" fill="#0a0a0a" />
            </svg>
            <span className="text-lg font-semibold tracking-tight">
              bioqore
            </span>
          </div>

          <div className="flex gap-8 text-sm text-white/40">
            <a href="#product" className="transition-colors hover:text-white">
              Product
            </a>
            <a href="#security" className="transition-colors hover:text-white">
              Security
            </a>
            <a href="#mission" className="transition-colors hover:text-white">
              Team
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
          </div>

          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Bioqore
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";

const connectLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "X", href: "https://x.com", external: true },
];

const productLinks = [
  { label: "Voyager", href: "#voyager" },
  { label: "Features", href: "#product" },
  { label: "Security", href: "#security" },
  { label: "How it works", href: "#how-it-works" },
];

const companyLinks = [
  { label: "About", href: "#mission" },
  { label: "Careers", href: "#contact" },
  { label: "Get in touch", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      {/* Top: "Follow our journey" form + Contact / Follow / Address */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: form */}
            <div>
              <h3 className="mb-6 font-mono text-lg font-semibold tracking-tight text-white">
                Follow our journey
              </h3>
              <form
                action="#"
                method="post"
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border-b border-white/30 bg-transparent pb-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
                  aria-label="Email"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="border-b border-white/30 bg-transparent pb-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="border-b border-white/30 bg-transparent pb-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
                    aria-label="Last name"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="border-b border-white/30 bg-transparent pb-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
                  aria-label="Company name"
                />
                <div className="relative">
                  <select
                    name="interest"
                    className="w-full appearance-none border-b border-white/30 bg-transparent pb-2 pr-8 text-sm text-white focus:border-white/60 focus:outline-none [color-scheme:dark]"
                    aria-label="Interest"
                  >
                    <option value="" className="bg-black text-white">
                      Please indicate your interest
                    </option>
                    <option value="demo" className="bg-black">
                      Request a demo
                    </option>
                    <option value="partner" className="bg-black">
                      Partnership
                    </option>
                    <option value="careers" className="bg-black">
                      Careers
                    </option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-0 top-0 h-5 w-5 text-white/50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <label className="mt-2 flex items-center gap-3 text-sm text-white/80">
                  <input
                    type="checkbox"
                    name="newsletter"
                    className="h-4 w-4 rounded border-white/30 bg-transparent text-black focus:ring-white/50"
                  />
                  Sign up for our newsletter
                </label>
                <button
                  type="submit"
                  className="mt-4 w-fit rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right: Contact, Follow, Address */}
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-20">
              <div>
                <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-white/70">
                  Contact
                </h4>
                <a
                  href="mailto:info@bioqore.com"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  info@bioqore.com
                </a>
              </div>
              <div>
                <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-white/70">
                  Follow
                </h4>
                <div className="flex flex-col gap-2">
                  {connectLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/90 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-white/70">
                  Address
                </h4>
                <p className="max-w-[240px] text-sm leading-relaxed text-white/90">
                  Bioqore
                  <br />
                  350 5th Avenue, Suite 3300
                  <br />
                  New York, NY 10118
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle: link columns with headings (Connect, Product, Company) */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-4 font-mono text-sm font-bold text-white">Connect</h4>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-sm font-bold text-white">Product</h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-sm font-bold text-white">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar: logo, copyright, Privacy | Get in touch */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <a href="#" className="relative flex items-center">
              <Image
                src="/bioqore-logo.png"
                alt="Bioqore"
                width={96}
                height={26}
                className="h-6 w-auto object-contain brightness-0 invert"
              />
            </a>
            <span className="text-sm text-white/50">
              © {new Date().getFullYear()} Bioqore. All rights reserved.
            </span>
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Get in touch
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

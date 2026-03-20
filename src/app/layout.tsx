import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Matthew's Grinds — LC · JC · Primary",
  description:
    "Personal one-to-one grinds in Dublin & online. Leaving Cert, Junior Cycle, and Primary support.",
};

function Nav() {
  const links = [
    { href: "/subjects", label: "Subjects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/tutors", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(245, 240, 232, 0.92)",
        borderBottom: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          details.navdrop .menu {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: max-height .28s ease, opacity .22s ease;
          }
          details.navdrop[open] .menu {
            max-height: 360px;
            opacity: 1;
          }
        `,
        }}
      />
      <nav className="container flex items-center justify-between py-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          Matthew&apos;s <span style={{ color: "var(--amber)" }}>Grinds</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7 text-sm" style={{ color: "var(--ink-muted)" }}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-[--ink] transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn btn-primary hidden md:inline-flex text-sm">
          Book a Session
        </Link>

        {/* Mobile hamburger */}
        <details className="navdrop relative md:hidden">
          <summary
            aria-label="Open menu"
            className="list-none rounded-lg p-2 cursor-pointer select-none"
            style={{ color: "var(--ink)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>

          <div
            className="menu absolute right-0 top-12 w-[min(18rem,90vw)] rounded-2xl p-3 shadow-xl"
            style={{
              backgroundColor: "var(--cream)",
              border: "1px solid rgba(26,26,26,0.1)",
            }}
          >
            <ul className="flex flex-col gap-1 text-sm" style={{ color: "var(--ink)" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#ece7de]"
                    style={{ color: "var(--ink)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-3 block w-full rounded-full px-4 py-2.5 text-center text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--ink)" }}
            >
              Book a Session
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen`}
        style={{ backgroundColor: "var(--cream)", color: "var(--ink)" }}
      >
        <Nav />
        <main>{children}</main>
        <footer
          className="py-10 text-sm"
          style={{
            borderTop: "1px solid rgba(26,26,26,0.1)",
            color: "var(--ink-muted)",
          }}
        >
          <div className="container flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Matthew&apos;s Grinds. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-[--ink] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[--ink] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew’s Grinds — LC · JC · Primary",
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
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      {/* Small, scoped CSS for the mobile dropdown animation */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          /* Mobile dropdown animation (no JS) */
          details.navdrop .menu {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transform-origin: top;
            transition: max-height .28s ease, opacity .22s ease;
          }
          details.navdrop[open] .menu {
            max-height: 320px; /* enough for all links + CTA */
            opacity: 1;
          }
        `,
        }}
      />
      <nav className="container flex items-center justify-between py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          <span className="text-indigo-600">Matthew’s</span> Grinds
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-slate-900">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary hidden md:inline-flex">
          Book a Session
        </Link>

        {/* Mobile: hamburger + dropdown */}
        <details className="navdrop relative md:hidden">
          <summary
            aria-label="Open menu"
            className="list-none rounded-md p-2 text-slate-700 hover:bg-slate-100 cursor-pointer select-none"
          >
            {/* Hamburger icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>

          {/* Dropdown panel */}
          <div className="menu absolute right-0 top-12 w-[min(18rem,90vw)] rounded-xl border bg-white p-3 shadow-xl">
            <ul className="flex flex-col gap-2 text-sm text-slate-700">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-md px-3 py-2 hover:bg-slate-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-3 block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
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
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
        <Nav />
        {/* subtle top gradient */}
        <div className="bg-gradient-to-b from-indigo-50/60 to-transparent">
          <main className="container py-10">{children}</main>
        </div>
        <footer className="border-t py-10 text-sm text-slate-600">
          <div className="container flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Matthew’s Grinds. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-900">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

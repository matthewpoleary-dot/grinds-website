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
      <nav className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          <span className="text-indigo-600">Matthew’s</span> Grinds
        </Link>
        <ul className="hidden md:flex gap-6 text-sm text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-slate-900">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="btn btn-primary hidden md:inline-flex"
        >
          Book a Session
        </Link>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}
      >
        <Nav />
        {/* subtle top gradient */}
        <div className="bg-gradient-to-b from-indigo-50/60 to-transparent">
          <main className="container py-10">{children}</main>
        </div>
        <footer className="border-t py-10 text-sm text-slate-600">
          <div className="container flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Matthew’s Grinds. All rights
              reserved.
            </p>
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

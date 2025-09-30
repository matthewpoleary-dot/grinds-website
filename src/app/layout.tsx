import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
title: "Dublin Grinds | LC · JC · Primary",
description: "One-to-one and small-group grinds in Dublin & online. Proven exam strategies for Leaving Cert, Junior Cycle, and Primary.",
};


function Nav() {
const links = [
{ href: "/subjects", label: "Subjects" },
{ href: "/pricing", label: "Pricing" },
{ href: "/tutors", label: "Tutors" },
{ href: "/book", label: "Book" },
{ href: "/resources", label: "Resources" },
{ href: "/contact", label: "Contact" },
];
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
<nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
<Link href="/" className="font-semibold tracking-tight">Dublin Grinds</Link>
<ul className="hidden md:flex gap-6 text-sm">
{links.map((l) => (
<li key={l.href}>
<Link href={l.href} className="hover:opacity-80">{l.label}</Link>
</li>
))}
</ul>
<Link href="/book" className="hidden md:inline-block rounded-xl px-4 py-2 border hover:bg-gray-50">Book a consult</Link>
</nav>
</header>
);
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen antialiased text-gray-900">
<Nav />
<main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
<footer className="border-t py-10 text-sm text-gray-600">
<div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
<p>© {new Date().getFullYear()} Dublin Grinds. All rights reserved.</p>
<div className="flex gap-4">
<Link href="/privacy">Privacy</Link>
<Link href="/terms">Terms</Link>
</div>
</div>
</footer>
</body>
</html>
);
}
import Link from "next/link";


export default function Home() {
return (
<div className="grid gap-10">
<section className="text-center py-8">
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
Grinds that actually move marks
</h1>
<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
One-to-one and small-group support for <strong>Leaving Cert</strong>, <strong>Junior Cycle</strong>, and <strong>Primary</strong>. Online or in-person (Dublin).
</p>
<div className="mt-6 flex justify-center gap-4">
<Link href="/book" className="rounded-xl px-5 py-3 bg-black text-white">Book free consult</Link>
<Link href="/pricing" className="rounded-xl px-5 py-3 border">View pricing</Link>
</div>
</section>


<section className="grid sm:grid-cols-3 gap-6">
{[
{ title: "Leaving Cert", body: "HL & OL: Maths, English, Irish, French, Business, Accounting, CS, more." },
{ title: "Junior Cycle", body: "Boost study skills and exam techniques across core subjects." },
{ title: "Primary", body: "Literacy & numeracy foundations with gentle, confidence-first tutoring." },
].map((c) => (
<div key={c.title} className="rounded-2xl border p-6">
<h3 className="font-semibold text-lg">{c.title}</h3>
<p className="mt-2 text-gray-600">{c.body}</p>
</div>
))}
</section>


<section className="rounded-2xl border p-6">
<h2 className="text-2xl font-semibold">Why parents & students pick us</h2>
<ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
<li>Garda‑vetted tutors with subject‑specific expertise.</li>
<li>Clear learning plans aligned to NCCA & SEC exam specs.</li>
<li>Flexible: online or in‑person in Dublin.</li>
<li>Evidence‑based study strategies and weekly progress notes.</li>
</ul>
</section>
</div>
);
}
export default function Page() {
    return (
      <div className="grid gap-6">
        <h1 className="text-3xl font-semibold text-slate-900">Book a free consult</h1>
        <p className="text-slate-700">
          Pick a 15-minute slot and we’ll plan the right path. Online or in-person.
        </p>
  
        <div className="card">
          {/* Replace with your Calendly/Cal.com embed */}
          <p className="text-slate-600">
            Calendly embed goes here. For now, message me at <span className="font-medium">yourname@email.com</span>.
          </p>
        </div>
      </div>
    );
  }
  
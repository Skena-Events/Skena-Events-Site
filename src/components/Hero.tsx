export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="absolute right-[-20%] top-[-20%] h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="absolute left-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-widest text-neutral-400">Skena Events</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">
          Skatuves, gaismas un skaņas noma visā Latvijā
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          Koncerti, festivāli, korporatīvie pasākumi — pilna servisa risinājumi ar piegādi un montāžu.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/kontakt" className="btn-primary">Saņemt piedāvājumu</a>
          <a href="/galerija" className="btn-ghost">Skatīt galeriju</a>
        </div>
      </div>
    </section>
  );
}

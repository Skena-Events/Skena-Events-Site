
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container py-10">
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold">Skena Events</h1>
          <p className="mt-3 text-neutral-300">
            Profesionāla skatuves aprīkojuma noma Latvijā: skatuves, gaismas, skaņa.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/kontakt"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 transition"
            >
              Sazināties
            </a>
            <a
              href="/galerija"
              className="inline-flex items-center rounded-xl border border-neutral-700 px-4 py-2 font-medium hover:bg-neutral-800 transition"
            >
              Galerija
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
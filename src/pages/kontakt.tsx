import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <h1 className="text-2xl font-bold">Kontakti</h1>
        <p className="mt-2 text-neutral-300">E-pasts: info@skenaevents.lv • Tālr.: +371 ______</p>

        <form className="mt-6 grid gap-4 card p-6 sm:grid-cols-2"
              action="https://formspree.io/f/your-id" method="POST">
          <input className="rounded-lg bg-neutral-800 p-3 outline-none" name="name" placeholder="Vārds, Uzvārds" required />
          <input className="rounded-lg bg-neutral-800 p-3 outline-none" type="email" name="email" placeholder="E-pasts" required />
          <input className="rounded-lg bg-neutral-800 p-3 outline-none sm:col-span-2" name="event" placeholder="Datums / pilsēta" />
          <textarea className="rounded-lg bg-neutral-800 p-3 outline-none sm:col-span-2" name="message" rows={4} placeholder="Apraksts" />
          <button className="btn-primary sm:col-span-2">Nosūtīt pieprasījumu</button>
        </form>

        <p className="mt-2 text-xs text-neutral-500">
          * Lai forma sūtītu vēstules, nomaini <code>your-id</code> uz savu Formspree ID.
        </p>
      </main>
      <Footer />
    </>
  );
}

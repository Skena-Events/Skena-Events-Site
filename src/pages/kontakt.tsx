import Navbar from "@/components/Navbar";
export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-2xl font-bold mb-2">Kontakti</h1>
        <p className="text-neutral-300">E-pasts: info@skenaevents.lv • Tālr.: +371 ______</p>
      </main>
    </>
  );
}
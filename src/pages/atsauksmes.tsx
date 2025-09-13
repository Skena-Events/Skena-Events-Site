import Navbar from "@/components/Navbar";
export default function AtsauksmesPage() {
  return (
    <>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-2xl font-bold mb-2">Atsauksmes</h1>
        <p className="text-neutral-300">Klientu atsauksmes (drīzumā).</p>
      </main>
    </>
  );
}
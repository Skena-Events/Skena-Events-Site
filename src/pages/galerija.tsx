import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const photos = [
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  "https://images.unsplash.com/photo-1520975682031-7f4b33624a6b",
  "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7",
  "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
];

export default function Galerija() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Galerija</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src) => (
            <img key={src} src={`${src}?auto=format&fit=crop&w=1100&q=60`}
                 className="h-64 w-full rounded-xl object-cover border border-neutral-800" alt="" />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

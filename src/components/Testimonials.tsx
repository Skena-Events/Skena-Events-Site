const items = [
  { name: "Agnese", text: "Ātra uzstādīšana un perfekta skaņa — ieteikšu visiem!" },
  { name: "Jānis", text: "Profesionāla komanda, sastrādāties bija viegli un droši." },
  { name: "Roberts", text: "Skatuve un gaismas pacēla pasākumu uz citu līmeni." },
];

export default function Testimonials() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">Atsauksmes</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="card p-6">
            <p className="text-neutral-200">“{t.text}”</p>
            <div className="mt-3 text-sm text-neutral-400">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

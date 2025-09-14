type Item = { title: string; desc: string; };
const Card = ({ title, desc }: Item) => (
  <div className="card p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-neutral-300">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">Mūsu pakalpojumi</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Skatuves" desc="Moduļu skatuves, jumta konstrukcijas, podesti, rampas." />
        <Card title="Gaismas" desc="LED prožektori, kustīgie galvas, uplight, DMX kontrole." />
        <Card title="Skaņa" desc="Line-array, mikseri, mikrofoni, monitori — pilni komplekti." />
      </div>
    </section>
  );
}

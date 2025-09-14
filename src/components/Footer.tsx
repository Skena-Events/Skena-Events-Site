export default function Footer() {
  return (
    <footer className="mt-14 border-t border-neutral-800">
      <div className="container py-6 text-sm text-neutral-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Skena Events • Latvija</div>
        <div className="font-mono text-xs">skenaevents.lv</div>
      </div>
    </footer>
  );
}

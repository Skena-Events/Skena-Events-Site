import Link from "next/link";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 hover:text-white transition"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-900/70 backdrop-blur">
      <nav className="container flex items-center justify-between h-14">
        <Link href="/" className="font-semibold tracking-wide">
          Skena Events
        </Link>
        <div className="flex items-center gap-1">
          <NavLink href="/">Sākums</NavLink>
          <NavLink href="/galerija">Galerija</NavLink>
          <NavLink href="/atsauksmes">Atsauksmes</NavLink>
          <NavLink href="/kontakt">Kontakti</NavLink>
        </div>
      </nav>
    </header>
  );
}
import Link from "next/link";
import { useRouter } from "next/router";

const LinkItem = ({ href, children }: any) => {
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition
        ${active ? "bg-neutral-800 text-white" : "text-neutral-300 hover:bg-neutral-800 hover:text-white"}`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-900/70 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">Skena Events</Link>
        <div className="flex items-center gap-1">
          <LinkItem href="/">Sākums</LinkItem>
          <LinkItem href="/galerija">Galerija</LinkItem>
          <LinkItem href="/atsauksmes">Atsauksmes</LinkItem>
          <LinkItem href="/kalkulators">Kalkulators</LinkItem>
          <LinkItem href="/kontakt">Kontakti</LinkItem>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-neutral-300">Lapa nav atrasta.</p>
      <Link href="/" className="mt-4 btn-primary">Atpakaļ uz sākumu</Link>
    </main>
  );
}

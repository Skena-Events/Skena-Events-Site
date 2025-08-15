import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: 'white' }}>
      <Link href="/">Sākums</Link> |{' '}
      <Link href="/login">Mans konts</Link> |{' '}
      <Link href="/calculator">Kalkulators</Link> |{' '}
      <Link href="/contact">Kontakti</Link>
    </nav>
  );
}

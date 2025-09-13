// src/components/Layout.tsx
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1040, margin: '24px auto', padding: '0 16px' }}>
        {children}
      </main>
    </>
  );
}
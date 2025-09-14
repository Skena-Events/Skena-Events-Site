import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head><title>Skena Events — skatuves, gaismas, skaņa</title></Head>
      <Navbar />
      <main className="container py-8">
        <Hero />
        <Services />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

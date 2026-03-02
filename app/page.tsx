import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Workflow } from '@/components/workflow';
import { Financials } from '@/components/financials';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Financials />
      <CTA />
      <Footer />
    </main>
  );
}

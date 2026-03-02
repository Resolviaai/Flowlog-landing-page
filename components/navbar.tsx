import Link from 'next/link';
import { Layers } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Layers className="w-6 h-6 text-indigo-500" />
          <span className="font-display font-semibold text-lg tracking-tight">Flow Log</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="#workflow" className="text-sm text-zinc-400 hover:text-white transition-colors">Workflow</Link>
          <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">
            Log in
          </Link>
          <button className="px-4 py-2 bg-white text-zinc-950 text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

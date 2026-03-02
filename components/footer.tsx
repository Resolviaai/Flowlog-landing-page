import { Layers } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Layers className="w-5 h-5 text-indigo-500" />
            <span className="font-display font-semibold tracking-tight">Flow Log</span>
          </div>
          
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Flow Log. Crafted for editors.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

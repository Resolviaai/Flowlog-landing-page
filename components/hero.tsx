'use client';

import { motion } from 'motion/react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Flow Log 2.0 is now available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 max-w-5xl"
          >
            The Professional <br className="hidden md:block" />
            <span className="italic text-indigo-400">Editor's OS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
          >
            Bridge the gap between creative production and business management. A single source of truth for project progress, revisions, and billing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-30" />
          <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="aspect-[16/9] bg-zinc-950 rounded-b-xl overflow-hidden relative">
              {/* Abstract Dashboard UI Elements */}
              <div className="absolute inset-0 p-6 grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <div className="col-span-3 space-y-4">
                  <div className="h-8 w-32 bg-white/5 rounded-md" />
                  <div className="space-y-2 mt-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-6 w-full bg-white/5 rounded-md" />
                    ))}
                  </div>
                </div>
                {/* Main Content */}
                <div className="col-span-9 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="h-10 w-48 bg-white/10 rounded-lg" />
                    <div className="h-10 w-32 bg-indigo-500/20 rounded-lg border border-indigo-500/30" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="h-4 w-16 bg-white/10 rounded" />
                        <div className="h-8 w-24 bg-white/20 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-64 bg-white/5 rounded-xl border border-white/5 p-4">
                    <div className="h-4 w-32 bg-white/10 rounded mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-10 w-full bg-white/5 rounded-lg flex items-center px-4 gap-4">
                          <div className="h-4 w-4 bg-white/10 rounded-full" />
                          <div className="h-4 w-1/3 bg-white/10 rounded" />
                          <div className="h-4 w-1/4 bg-white/5 rounded ml-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

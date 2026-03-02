'use client';

import { motion } from 'motion/react';
import { Activity, Clock, CheckCircle2 } from 'lucide-react';

export function Workflow() {
  return (
    <section className="py-24 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
      
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6"
            >
              The Perfect <br />
              <span className="italic text-zinc-500">Feedback Loop</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-8 leading-relaxed"
            >
              Stop losing track of revisions in endless email threads. Flow Log provides a structured dual-note system for client feedback and editor responses, complete with exact time tracking.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Activity, title: 'Status Lifecycle', desc: 'Track from Requested → In Progress → Completed' },
                { icon: Clock, title: 'Editor Analytics', desc: 'Log exact time spent per revision for profitability analysis' },
                { icon: CheckCircle2, title: 'Version Control', desc: 'Automatic incrementing of revision versions' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-200 mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <span className="font-mono text-indigo-400 font-medium">v3</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Color Grading Fix</h5>
                    <p className="text-xs text-zinc-500">Requested 2h ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                  In Progress
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">Client Note</p>
                  <p className="text-sm text-zinc-300">Can we make the shadows a bit cooler in the intro sequence? It feels too warm right now.</p>
                </div>
                
                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-6">
                  <p className="text-xs text-indigo-400/70 mb-2 uppercase tracking-wider font-medium">Editor Response</p>
                  <p className="text-sm text-zinc-300">Adjusted the shadows to a cooler teal tone. Also slightly lifted the midtones for better contrast.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>Time spent: 15m</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

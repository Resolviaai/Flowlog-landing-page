'use client';

import { motion } from 'motion/react';
import { Layers, Video, MessageSquare, DollarSign } from 'lucide-react';

const features = [
  {
    title: 'Isolated Workspaces',
    description: 'Manage multiple clients without data overlap. Set unique branding and localized financials per workspace.',
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Advanced Video Pipeline',
    description: 'Track metadata, automated timelines, and priorities. Direct integration with cloud storage via Drive links.',
    icon: Video,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
  },
  {
    title: 'Precision Revision System',
    description: 'Eliminate feedback loops. Track revisions, editor analytics, and utilize a dual-note system for clear communication.',
    icon: MessageSquare,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
  },
  {
    title: 'Financial Intelligence',
    description: 'Group videos into payment batches. Handle custom prices, bonuses, and real-time financial formulas effortlessly.',
    icon: DollarSign,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
];

export function Features() {
  return (
    <section className="py-24 relative z-10 bg-zinc-950">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4"
          >
            Engineered for <span className="text-zinc-500">Precision</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to manage your freelance editing business, from the first cut to the final invoice.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

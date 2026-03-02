'use client';

import { motion } from 'motion/react';

export function Financials() {
  return (
    <section className="py-24 relative">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-zinc-900/80 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                  <p className="text-sm text-zinc-500 mb-2">Total Balance</p>
                  <p className="text-3xl font-display font-medium text-white">$4,250.00</p>
                  <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="bg-zinc-900/80 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                  <p className="text-sm text-zinc-500 mb-2">Unpaid Work Value</p>
                  <p className="text-2xl font-display font-medium text-amber-400">$850.00</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-zinc-900/80 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                  <p className="text-sm text-zinc-500 mb-2">Revenue Earned</p>
                  <p className="text-2xl font-display font-medium text-white">$12,400.00</p>
                </div>
                <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl shadow-indigo-900/20">
                  <p className="text-sm text-indigo-200 mb-2">Active Batch</p>
                  <p className="text-2xl font-display font-medium text-white">October Edits</p>
                  <p className="text-sm text-indigo-200 mt-2">5 videos • Post-delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6"
            >
              Accounting, <br />
              <span className="text-emerald-400">Simplified.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-8 leading-relaxed"
            >
              A robust accounting layer designed to handle the nuances of freelance editing. Group videos into billing cycles, manage advance payments, and track every dollar.
            </motion.p>

            <ul className="space-y-4">
              {[
                'Payment Batches (Advance & Post-delivery)',
                'Custom Prices & Discretionary Bonuses',
                'Real-time Financial Formulas',
                'Multiple Payment Methods Supported'
              ].map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

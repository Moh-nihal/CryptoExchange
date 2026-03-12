'use client'

import { motion } from 'framer-motion'

const studies = [
  {
    title: 'On-chain Treasury Dashboard',
    subtitle: 'Crypto-native treasury analytics for DAO portfolios.',
    meta: 'Analytics · DeFi · Governance',
  },
  {
    title: 'Institutional OTC Desk',
    subtitle: 'Low-latency execution with real-time risk controls.',
    meta: 'Execution · Risk · Reporting',
  },
  {
    title: 'Stablecoin Payments Rail',
    subtitle: 'Programmable payouts across global counterparties.',
    meta: 'Payments · APIs · Compliance',
  },
]

const CaseStudies = () => {
  return (
    <section className='md:pt-40 pt-16'>
      <div className='container px-4'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10'>
          <div>
            <p className='sm:text-28 text-18 text-muted mb-2'>
              Featured <span className='text-primary'>work</span>
            </p>
            <h2 className='text-white sm:text-40 text-30 font-medium'>
              Recent fintech & blockchain builds.
            </h2>
          </div>
          <p className='text-muted/60 text-16 max-w-xl'>
            A curated selection of products we&apos;ve shipped with teams
            across exchanges, DeFi protocols, and payment companies.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {studies.map((study, index) => (
            <motion.article
              key={study.title}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className='group relative overflow-hidden rounded-2xl border border-dark_border/40 bg-slateGray/40 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-primary/80 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.55)] transition-all duration-300'>
              <div className='absolute inset-0 bg-radial-at-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative z-1'>
                <h3 className='text-white text-22 font-semibold mb-3'>
                  {study.title}
                </h3>
                <p className='text-muted/70 text-16 mb-4'>{study.subtitle}</p>
              </div>
              <div className='relative z-1 flex items-center justify-between pt-2'>
                <p className='text-muted/60 text-14'>{study.meta}</p>
                <span className='inline-flex items-center gap-2 text-primary text-14'>
                  View case
                  <span className='h-[1px] w-5 bg-primary group-hover:w-8 transition-all duration-300' />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies


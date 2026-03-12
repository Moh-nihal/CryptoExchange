'use client'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section className='md:pt-48 sm:pt-28 pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 32, opacity: 0 }}
          transition={{ duration: 0.6 }}>
          <div className='max-w-2xl mb-10'>
            <p className='sm:text-28 text-18 text-muted mb-3'>
              Crypto <span className='text-primary'>portfolios</span>
            </p>
            <h2 className='text-white sm:text-40 text-30 mb-4 font-medium'>
              Opinionated building blocks for digital asset products.
            </h2>
            <p className='text-muted/70 text-18'>
              Mix and match wallet, trading, and analytics capabilities to
              assemble a portfolio experience that fits your users— without
              stitching together multiple vendors.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
            {portfolioData.map((item, index) => (
              <article
                key={index}
                className='group relative overflow-hidden rounded-2xl border border-dark_border/40 bg-dark_grey/80 backdrop-blur-sm p-5 hover:border-primary/80 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition-all duration-300'>
                <div className='absolute inset-0 bg-radial-at-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative z-1 flex flex-col gap-3'>
                  <div className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/30'>
                    <span className='h-4 w-4 rounded-md bg-primary/70' />
                  </div>
                  <h3 className='text-white text-22 font-semibold'>
                    {item.title}
                  </h3>
                  <p className='text-16 text-muted/70'>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

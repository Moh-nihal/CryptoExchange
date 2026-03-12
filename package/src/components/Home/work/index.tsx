'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      label: 'Protocol & product strategy',
      description: 'From token economics to go-to-market for exchanges, wallets, and DeFi.',
    },
    {
      label: 'Full-stack engineering pods',
      description: 'Senior teams across smart contracts, APIs, and frontends that ship quickly.',
    },
    {
      label: 'Compliance-aware architecture',
      description: 'Designs that anticipate KYC / AML, custody and reporting requirements.',
    },
    {
      label: 'Lifecycle partnership',
      description: 'We stay through launch, iteration, and scale— not just MVP handoff.',
    },
  ]

  return (
    <section className='md:pt-28' id='work'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          <motion.div
            {...bottomAnimation}
            className='lg:col-span-7 col-span-12'>
            <p className='sm:text-28 text-18 text-white'>
              Why teams choose <span className='text-primary'>NovaLedger</span>
            </p>
            <h2 className='sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium'>
              An embedded partner for serious crypto products.
            </h2>
            <div className='grid md:grid-cols-2 gap-7 mt-11'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='group rounded-2xl border border-dark_border/40 bg-dark_grey/70 backdrop-blur-sm px-6 py-5 hover:border-primary/70 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.85)] transition-all duration-300'>
                  <div className='flex items-start gap-4'>
                    <div className='mt-1 h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center'>
                      <span className='h-2 w-2 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300' />
                    </div>
                    <div>
                      <h3 className='text-18 text-white mb-1'>{service.label}</h3>
                      <p className='text-16 text-muted/70'>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className='lg:col-span-5 col-span-12'>
            <div className='2xl:-mr-40 mt-9 flex justify-center'>
              <Image
                src='/images/work/img-work-with-us.png'
                alt='image'
                width={600}
                height={425}
                className='lg:w-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work

'use client'
import Image from 'next/image'
import { timelineData } from '@/app/api/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <p className='text-muted sm:text-28 text-18 mb-9'>
              Delivery <span className='text-primary'>timeline</span>
            </p>
            <h2 className='text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20'>
              A clear, step-based process from the first strategy call to live users.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div
              ref={ref}
              className='relative max-w-4xl mx-auto border border-dark_border/40 rounded-3xl bg-dark_grey/70 backdrop-blur-sm px-6 sm:px-10 py-10'>
              <div className='absolute left-10 top-0 -translate-y-1/2 h-8 w-8 rounded-full bg-primary/40 blur-xl' />
              <div className='absolute right-10 bottom-0 translate-y-1/2 h-10 w-10 rounded-full bg-secondary/30 blur-xl' />

              <div className='relative z-1'>
                <ol className='space-y-8'>
                  {timelineData.map((item, index) => (
                    <li key={index} className='grid grid-cols-[auto,1fr] gap-6'>
                      <div className='flex flex-col items-center'>
                        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/40'>
                          <span className='h-2 w-2 rounded-full bg-primary' />
                        </span>
                        {index !== timelineData.length - 1 && (
                          <span className='mt-2 h-10 w-px bg-dark_border/50' />
                        )}
                      </div>
                      <div className='text-left'>
                        <p className='text-14 text-muted/60 mb-1'>
                          Step {index + 1}
                        </p>
                        <h4 className='text-24 text-white mb-1'>
                          {item.title}
                        </h4>
                        <p className='text-16 text-muted/70'>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine

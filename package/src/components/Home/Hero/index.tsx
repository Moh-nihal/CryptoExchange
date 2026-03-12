'use client'
import { motion } from 'framer-motion'
import BuyCrypto from './buy-form'
import SellCrypto from './sell-form'
import CardSlider from './slider'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false)
  const [isSelling, setIsSellingOpen] = useState(false)
  const BuyRef = useRef<HTMLDivElement>(null)
  const SellRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false)
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false)
      }
    },
    [BuyRef, SellRef]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? 'hidden' : ''
  }, [isBuying, isSelling])

  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      className='relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1 bg-gradient-to-b from-slateGray/80 via-darkmode to-darkmode'
      id='main-banner'>
      <div className='container px-4'>
        <div className='grid grid-cols-12'>
          <motion.div {...leftAnimation} className='lg:col-span-5 col-span-12'>
            <div className='flex gap-4 items-center lg:justify-start justify-center mb-5 mt-20'>
              <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 border border-primary/30'>
                <span className='h-2 w-2 rounded-full bg-primary animate-ping' />
              </span>
              <p className='text-muted sm:text-18 text-16 mb-0 uppercase tracking-[0.16em]'>
                Built for modern fintech teams
              </p>
            </div>
            <h1 className='font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-6'>
              Ship institutional-grade{' '}
              <span className='text-primary'>crypto products</span> faster.
            </h1>
            <p className='text-muted/70 text-18 lg:text-start text-center mb-10'>
              NovaLedger gives you the building blocks for wallets, trading,
              and on-chain data so you can go from idea to launch in weeks, not
              months.
            </p>
            <div className='flex items-center md:justify-start justify-center gap-8'>
              <button
                className='bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50 shadow-[0_18px_60px_rgba(74,222,128,0.4)] hover:shadow-[0_22px_80px_rgba(74,222,128,0.6)] transition-shadow duration-300'
                onClick={() => setIsBuyingOpen(true)}>
                Launch a sandbox
              </button>
              <button
                className='bg-transparent border border-primary/50 rounded-lg text-21 font-medium hover:bg-primary/10 hover:text-primary text-muted py-2 px-7'
                onClick={() => setIsSellingOpen(true)}>
                Talk to our team
              </button>
            </div>
            <div className='grid sm:grid-cols-3 gap-6 mt-16'>
              <div className='rounded-xl border border-dark_border/40 bg-dark_grey/80 px-5 py-4 backdrop-blur-sm'>
                <p className='text-14 text-muted/70 mb-1'>Assets monitored</p>
                <p className='text-24 text-white font-semibold'>$1.2B+</p>
              </div>
              <div className='rounded-xl border border-dark_border/40 bg-dark_grey/80 px-5 py-4 backdrop-blur-sm'>
                <p className='text-14 text-muted/70 mb-1'>Average go-live</p>
                <p className='text-24 text-white font-semibold'>6 weeks</p>
              </div>
              <div className='rounded-xl border border-dark_border/40 bg-dark_grey/80 px-5 py-4 backdrop-blur-sm'>
                <p className='text-14 text-muted/70 mb-1'>Regions covered</p>
                <p className='text-24 text-white font-semibold'>30+</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className='col-span-7 lg:block hidden'>
            <div className='ml-20 -mr-32'>
              <div className='relative rounded-[32px] border border-dark_border/40 bg-linear-to-tr from-dark_grey via-slateGray/80 to-darkmode p-6 shadow-[0_40px_140px_rgba(15,23,42,0.95)] overflow-hidden'>
                <div className='absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl' />
                <div className='absolute -bottom-24 -left-6 h-64 w-64 rounded-full bg-secondary/20 blur-3xl' />

                <div className='relative z-1 grid grid-cols-2 gap-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <p className='text-14 text-muted/70'>Live markets</p>
                      <span className='rounded-full bg-primary/15 px-3 py-1 text-12 text-primary'>
                        Realtime
                      </span>
                    </div>
                    <div className='space-y-3'>
                      {['BTC / USD', 'ETH / USD', 'SOL / USD', 'USDC / USD'].map(
                        (pair, index) => (
                          <div
                            key={pair}
                            className='flex items-center justify-between rounded-lg bg-dark_grey/75 px-3 py-2 border border-dark_border/30'>
                            <span className='text-14 text-muted'>{pair}</span>
                            <span className='text-14 text-primary'>
                              {index === 0 ? '+2.4%' : index === 1 ? '+1.1%' : '+0.6%'}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <p className='text-14 text-muted/70'>Infrastructure health</p>
                    <div className='rounded-2xl bg-dark_grey/80 border border-dark_border/40 p-4'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-14 text-muted'>Latency</span>
                        <span className='text-14 text-white font-medium'>
                          42 ms
                        </span>
                      </div>
                      <div className='w-full h-1.5 rounded-full bg-dark_border/40 overflow-hidden mb-3'>
                        <div className='h-full w-3/5 bg-linear-to-r from-primary to-secondary' />
                      </div>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-14 text-muted'>API uptime</span>
                        <span className='text-14 text-white font-medium'>
                          99.99%
                        </span>
                      </div>
                      <p className='text-12 text-muted/60'>
                        Status across custody, trading, and data pipelines in a
                        single view.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className='absolute w-50 h-50 bg-linear-to-bl from-primary/40 via-secondary/40 to-dark_grey blur-400 rounded-full -top-64 -right-14 -z-1 opacity-70'></div>

      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={BuyRef}
            className='relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md'>
            <button
              onClick={() => setIsBuyingOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Buy Modal'>
              <Icon
                icon='tabler:currency-xrp'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <BuyCrypto />
          </div>
        </div>
      )}
      {isSelling && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={SellRef}
            className='relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md'>
            <button
              onClick={() => setIsSellingOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Sell Modal'>
              <Icon
                icon='tabler:currency-xrp'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <SellCrypto />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero

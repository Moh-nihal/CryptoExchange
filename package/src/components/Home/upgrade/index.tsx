import { upgradeData } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Upgrade = () => {
  return (
    <section className='md:py-40 py-20' id='upgrade'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-[1.1fr,1fr] sm:gap-10 gap-10 items-start'>
          <div>
            <p className='text-primary sm:text-28 text-18 mb-3'>Core features</p>
            <h2 className='text-white sm:text-40 text-30  font-medium mb-5'>
              Upgrade your crypto infrastructure layer.
            </h2>
            <p className='text-muted/60 text-18 mb-7'>
              A resilient backbone for custody, pricing and execution so your
              product teams can focus on differentiated experiences.
            </p>
            <div className='grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-6 gap-4'>
              {upgradeData.map((item, index) => (
                <div
                  key={index}
                  className='group flex items-start gap-4 rounded-2xl bg-dark_grey/80 border border-dark_border/40 px-4 py-4 hover:border-primary/80 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition-all duration-300'>
                  <div className='mt-1'>
                    <Icon
                      icon='la:check-circle-solid'
                      width='22'
                      height='22'
                      className='text-primary'
                    />
                  </div>
                  <div>
                    <h4 className='text-16 text-white/90'>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='relative rounded-3xl border border-dark_border/40 bg-linear-to-tr from-dark_grey via-slateGray/70 to-darkmode p-6 overflow-hidden shadow-[0_30px_120px_rgba(15,23,42,0.95)]'>
              <div className='absolute -top-20 right-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl' />
              <div className='absolute -bottom-24 -left-10 h-44 w-44 rounded-full bg-secondary/20 blur-3xl' />
              <div className='relative z-1 space-y-5'>
                <div className='flex items-center justify-between'>
                  <p className='text-14 text-muted/70'>Cluster status</p>
                  <span className='inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-12 text-primary'>
                    Healthy
                    <span className='h-1.5 w-1.5 rounded-full bg-primary animate-pulse' />
                  </span>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='rounded-2xl bg-dark_grey/80 border border-dark_border/40 px-4 py-3'>
                    <p className='text-12 text-muted/60 mb-1'>Avg. write latency</p>
                    <p className='text-20 text-white font-semibold'>38 ms</p>
                  </div>
                  <div className='rounded-2xl bg-dark_grey/80 border border-dark_border/40 px-4 py-3'>
                    <p className='text-12 text-muted/60 mb-1'>Redundancy</p>
                    <p className='text-20 text-white font-semibold'>x5 zones</p>
                  </div>
                  <div className='col-span-2 rounded-2xl bg-dark_grey/80 border border-dark_border/40 px-4 py-3'>
                    <p className='text-12 text-muted/60 mb-2'>Throughput utilization</p>
                    <div className='w-full h-1.5 rounded-full bg-dark_border/40 overflow-hidden mb-2'>
                      <div className='h-full w-3/4 bg-linear-to-r from-primary to-secondary' />
                    </div>
                    <p className='text-12 text-muted/60'>Current: 7.4k req/s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade

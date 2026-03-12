import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='inline-flex items-center gap-2 group'>
      <span className='relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-primary/80 via-secondary/80 to-primary/40 shadow-[0_0_30px_rgba(74,222,128,0.4)] group-hover:shadow-[0_0_40px_rgba(74,222,128,0.7)] transition-shadow duration-300'>
        <span className='h-4 w-4 rounded-md border border-white/40 bg-white/10 backdrop-blur-sm' />
      </span>
      <span className='flex flex-col leading-tight'>
        <span className='text-white text-18 font-semibold tracking-tight'>
          NovaLedger
        </span>
        <span className='text-14 text-muted/70'>
          Crypto infrastructure studio
        </span>
      </span>
    </Link>
  )
}

export default Logo

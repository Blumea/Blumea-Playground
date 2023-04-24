import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex  py-3 px-4 drop-shadow-lg border-b font-work_sans tracking-wide'>
      <div className='flex items-center w-full gap-2'>
        <Image
          src='/images/Logo.png'
          width={30}
          height={30}
          alt='BlumeaLogo'
        />
        <span className='text-xl font-semibold'>Blumea Playground</span>
        <Link
          href={'#'}
          className='flex ml-8 items-center gap-2
        '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
            />
          </svg>
          Website
        </Link>
      </div>
      <div className='flex items-center max-w-md w-full gap-8 justify-end'>
        <Link href={'#'} className='flex gap-3 items-center'>
          Documentation
        </Link>
        <Link href={'#'} className='flex gap-3 items-center'>
          <Image src='/images/npm-logo.svg' width={30} height={30} alt='npm' />
          Package
        </Link>
      </div>
    </div>
  )
}

export default Header

import Image from 'next/image'
const Loader = () => {
  return (
    <div className='w-full min-h-[90vh] bg-white flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <Image src='/images/Logo.png' alt='Logo' width={100} height={100} />
        <div className='font-work_sans tracking-wider text-lg'>
          Explore Blumea like never before!
        </div>
        <div className='w-12 h-12 border-4  border-b-black rounded-full animate-spin'></div>
      </div>
    </div>
  )
}

export default Loader

import React from 'react'

const ScreenFallback = () => {
  return (
    <div className='w-full flex justify-center min-h-[90vh] items-center font-work_sans tracking-wider p-4'>
      <div className='grid grid-cols-warningColumnsGrid drop-shadow-lg rounded-lg border p-4'>
        <div className='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-12 h-12 text-warning'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
            />
          </svg>
        </div>
        <div className='grid grid-rows-warningRowsGrid'>
          <div className='flex items-center text-xl'>Screen size error!</div>
          <div className='text-lg'>Blumea playground is currently unavailable for the current screen size.</div>
        </div>
      </div>
    </div>
  )
}

export default ScreenFallback

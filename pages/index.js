import EndpointMonitor from '@/components/EndpointMonitor/EndpointMonitor.component'
import FilterCard from '@/components/FilterCard/FilterCard.component'
import { filterData, FilterVarient, ApiActions } from '@/data/FilterData'
import { JsonViewer } from '@textea/json-viewer'
import axios from 'axios'
import { useState } from 'react'

const HomePage = ({ ResponseFromHome }) => {
  const [filterConstant, setFilterConstant] = useState('')
  const [apiActionConstant, setApiActionConstant] = useState('')
  const [username, setUserName] = useState('')
  const [data, setData] = useState(ResponseFromHome)
  const [statusCode,setStatusCode] = useState(200)

  const handleApiCall = async () => {
    let responseData
    const customURL = `https://blumea-serverless.vercel.app${
      filterConstant && `/api/${filterConstant}`
    }${apiActionConstant && `/${apiActionConstant}`}${
      username && apiActionConstant !== 'all' && filterConstant && apiActionConstant ? `?item=${username}` : ``
    }`
    const config = {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
      },
    }
    if (username && apiActionConstant === 'create') {
      responseData = await axios
        .post(customURL, {}, config)
        .then((res) => res.data)
        .catch((err) => err)
      setData(responseData)
    } else if (username && apiActionConstant === 'search') {
      responseData = await axios
        .get(customURL, config)
        .then((res) => res.data)
        .catch((err) => err)
      setData(responseData)
    } else {
      responseData = await axios
        .get(customURL, config)
        .then((res) => res.data)
        .catch((err) => err)
      setData(responseData)
    }
  }

  const handleVariant = (e) => {
    setFilterConstant(e.target.value)
  }
  const handleActionVarient = (e) => {
    setApiActionConstant(e.target.value)
  }

  return (
    <div className='grid grid-cols-contentColumnGrid pt-4 font-mono mx-4'>
      <div className='bg-white p-3 flex gap-2 border-r rounded-s-md drop-shadow-md'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        Configuration
      </div>
      <div className='bg-white p-3 flex gap-2 rounded-e-md drop-shadow-md justify-between'>
        <div className='flex gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          Canvas
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
        </div>
      </div>
      <div className='border-r mt-4 p-3'>
        <div className='flex gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3'
            />
          </svg>
          <span>Filter Varient</span>
        </div>
        <div className='my-4'>
          <select
            id='large'
            className='drop=shadow-md block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleVariant}
            required
          >
            <option defaultValue={true} value={''}>
              Choose a varient
            </option>
            {FilterVarient.map((filterType) => (
              <option key={filterType.id} value={filterType.id}>
                {filterType.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
            />
          </svg>

          <span>API Actions</span>
        </div>
        <div className='my-4'>
          <select
            id='large'
            className='drop=shadow-md block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleActionVarient}
            required
            disabled={!filterConstant}
          >
            <option defaultValue={true} value={''}>
              Choose a varient
            </option>
            {ApiActions.map((actionType) => (
              <option key={actionType.id} value={actionType.id}>
                {actionType.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className='flex gap-2 my-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
              />
            </svg>

            <span>User-name (Data)</span>
          </div>
          <input
            type='text'
            id='large-input'
            placeholder='Enter a username ...'
            disabled={
              (!filterConstant && !apiActionConstant) ||
              apiActionConstant == 'all'
            }
            onChange={(e) => setUserName(e.target.value)}
            className='drop=shadow-md block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <button
          type='button'
          className='drop-shadow-lg gap-3 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2 w-full my-8 justify-center'
          onClick={handleApiCall}
        >

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'
            />
          </svg>
          Execute Request
        </button>
      </div>
      <div className='mt-4 ml-3'>
        <div className='flex gap-2'>
          {filterData.map((filterType) => (
            <FilterCard
              key={filterType.id}
              name={filterType.name}
              id={filterType.id}
              baseRoute={filterType.baseRoute}
              customRoute={filterType.customRoute}
              active={filterType.active}
            />
          ))}
        </div>
        <EndpointMonitor
          variantType={filterConstant}
          actionType={apiActionConstant}
          userName={username}
          statusCode = {statusCode}
        />
        <div className='h-96 bg-white drop-shadow-md rounded-lg p-10 overflow-scroll text-[18px]'>
          <JsonViewer value={data.data ? data.data : data} />
        </div>
      </div>
    </div>
  )
}

export default HomePage

export async function getServerSideProps() {
  const config = {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
    },
  }
  const ApiHome = 'https://blumea-serverless.vercel.app'

  const ResponseFromHome = await axios
    .get(ApiHome, config)
    .then((res) => res.data)
    .catch((err) => err)

  return {
    props: {
      ResponseFromHome,
    },
  }
}

import EndpointMonitor from '@/components/EndpointMonitor/EndpointMonitor.component'
import FilterCard from '@/components/FilterCard/FilterCard.component'
import ButtonLoader from '@/components/Loader/ButtonLoader'
import Loader from '@/components/Loader/Loader'
import {
  filterData,
  FilterVarient,
  ApiActions,
  sampleUser,
  filterFirstName,
} from '@/data/FilterData'
import { JsonViewer } from '@textea/json-viewer'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HomePage = ({ ResponseFromHome }) => {
  const [filterConstant, setFilterConstant] = useState('')
  const [apiActionConstant, setApiActionConstant] = useState('')
  const [username, setUserName] = useState('')
  const [rawData, setRawData] = useState(ResponseFromHome)
  const [data, setData] = useState(ResponseFromHome)
  const [statusCode, setStatusCode] = useState(data.status)
  const [message, setMessage] = useState(data.message)
  const [timer, setTimer] = useState(false)
  const [userData, setUserData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const handleTimer = () => {
    setTimer(true)
    setTimeout(() => {
      setTimer(false)
    }, [3000])
  }


  useEffect(() => {
    setUserData()
    setLoading(true)
    const fetchTableData = async () => {
      const customURL = `https://blumea-serverless.vercel.app${
        filterConstant && `/api/${filterConstant}/all`
      }`
      const config = {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
        },
      }
      const responseData = await axios
        .get(customURL, config)
        .then((res) => res)
        .catch((err) => err.response)
      if (responseData.data.data) {
        setUserData(responseData.data.data.itemList)
      }
      setLoading(false)
    }
    fetchTableData()
  }, [data, filterConstant])

  useEffect(() => {
    setStatusCode(data.status)
    setMessage(
      data.status === 200 || data.status === 201
        ? data.message
        : data.message + ' ' + (data.data.error ? data.data.error : '')
    )
  }, [data])

  const handleApiCall = async () => {
    let responseData
    const customURL = `https://blumea-serverless.vercel.app${
      filterConstant && `/api/${filterConstant}`
    }${apiActionConstant && `/${apiActionConstant}`}${
      username &&
      apiActionConstant !== 'all' &&
      filterConstant &&
      apiActionConstant
        ? `?item=${username}`
        : ``
    }`
    const config = {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
      },
    }
    if (apiActionConstant === 'create') {
      responseData = await axios
        .post(customURL, {}, config)
        .then((res) => res)
        .catch((err) => err.response)
    } else if (apiActionConstant === 'search') {
      responseData = await axios
        .get(customURL, config)
        .then((res) => res)
        .catch((err) => err.response)
    } else {
      responseData = await axios
        .get(customURL, config)
        .then((res) => res)
        .catch((err) => err.response)
    }
    setRawData(responseData)
    setData(responseData.data)
  }

  const toggleFilterConstant = (id) => {
    if (filterConstant === id) {
      setFilterConstant('')
      setApiActionConstant('')
    } else {
      setFilterConstant(id)
    }
  }
  const toggleAction = (action) => {
    if (apiActionConstant === action) {
      setApiActionConstant('')
    } else {
      setApiActionConstant(action)
    }
  }

  const handleVariant = (e) => {
    setFilterConstant(e.target.value)
  }
  const handleActionVarient = (e) => {
    setApiActionConstant(e.target.value)
  }

  return (
    <div className='grid grid-cols-contentColumnGrid pt-4 font-work_sans tracking-wider mx-4 relative'>
      <div className='bg-white p-3 flex gap-2 border-r rounded-s-md drop-shadow-md  items-center'>
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
      <div className='bg-white p-3 flex gap-2 rounded-e-md drop-shadow-md justify-between items-center'>
        <div className='flex gap-12 items-center'>
          <div className='flex items-center min-w-max gap-2'>
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
            <span>Filter in use : </span>
          </div>

          <div className='ml-4 w-full flex gap-3'>
            {filterFirstName.map((filterType) => (
              <span
                key={filterType.id}
                onClick={() => toggleFilterConstant(filterType.id)}
                className={`${
                  filterType.id === filterConstant &&
                  `${
                    filterConstant === 'classical'
                      ? 'bg-classical-300 border-1 border-slate-300'
                      : `${filterConstant}` === `counting`
                      ? 'bg-counting-300 border-1 border-slate-300'
                      : `${filterConstant}` === `scalable`
                      ? 'bg-scalable-300 border-1 border-slate-300'
                      : `${filterConstant}` === `partitioned`
                      ? 'bg-partitioned-300 border-1 border-slate-300'
                      : `${filterConstant}` === `cuckoo`
                      ? 'bg-cuckoo-300 border-1 border-slate-300'
                      : 'bg-default-300'
                  }`
                } drop-shadow-lg border rounded-lg py-1 px-2 cursor-pointer`}
              >
                {filterType.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={`${isLoading ? 'animate-spin' : ''} w-6 h-6 `}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
        </div>
      </div>
      <div className='mt-4'>
        <div className='bg-white p-4 drop-shadow-md rounded-lg'>
          <div className='mb-6 text-lg flex items-center justify-between'>
            <div>Working Status</div>
            {/* <div
              className={`${timer && 'animate-spin'} w-max cursor-pointer`}
              onClick={handleTimer}
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
                  d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                />
              </svg>
            </div> */}
          </div>
          <div>
            {filterData.map((filterItem, index) => (
              <div key={index} className='flex justify-between pb-5'>
                <span>{filterItem.name.split(' ')[0]}</span>
                {filterItem.active ? (
                  <span className='bg-successTrans text-sm border-2 border-success py-1 px-2 rounded-md drop-shadow-lg'>
                    Active
                  </span>
                ) : (
                  <span className='bg-failureTrans text-sm border-2 border-failure py-1 px-2 rounded-md drop-shadow-lg'>
                    Inactive
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* <button className='drop-shadow-lg gap-3 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-0 w-full mt-4 justify-center'>
            Test Filters
          </button> */}
        </div>
        <div className='border-r mt-80 p-3 sticky top-10'>
          {/* <div className=' top-10'> */}
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
              className='drop=shadow-md block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500'
              onChange={handleVariant}
              required
              value={filterConstant}
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
              className='drop=shadow-md block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 disabled:bg-offWhiteBase disabled:cursor-not-allowed'
              onChange={handleActionVarient}
              required
              disabled={!filterConstant}
              value={apiActionConstant}
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
              value={username}
              className='drop=shadow-md block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-offWhiteBase disabled:cursor-not-allowed'
            />
          </div>
          <button
            type='button'
            className='drop-shadow-lg gap-3 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 w-full my-8 justify-center'
            onClick={handleApiCall}
          >
            {isLoading ? (
              <ButtonLoader />
            ) : (
              <>
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
              </>
            )}
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className='mt-4 mb-8 ml-3'>
        <div className='bg-white py-2 px-4 drop-shadow-md mb-4 rounded-lg flex gap-2 items-center'>
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

          {filterConstant ? (
            <span className='bg-success text-white py-1 px-2 rounded drop-shadow-md'>
              Existing data for the Filter
            </span>
          ) : (
            <>
              <span className='bg-warning text-white py-1 px-2 rounded drop-shadow-md'>
                No Filter Chosen! Click to choose.
              </span>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 animate-bounce'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
                  />
                </svg>
              </div>
            </>
          )}
        </div>
        <div className='bg-white mb-4 rounded-lg drop-shadow-md p-4 flex flex-col justify-center items-center gap-2'>
          {filterConstant ? (
            <div className='w-full relative overflow-x-auto shadow-md rounded-lg h-[260px] overflow-scroll'>
              <div className='absolute left-1/2 -translate-x-1/2 top-28'>
                {isLoading && <Loader />}
                {!userData ? '' : userData.length === 0 ? 'NO DATA FOUND' : ''}
                {!isLoading && userData === undefined && (
                  <span className='text-failure'>
                    Filter is inactive and can't be tested for the time being.
                  </span>
                )}
              </div>
              <table className='w-full text-md text-left text-gray-600 relative'>
                <thead className='text-sm text-gray-700 uppercase'>
                  <tr
                    className={`${
                      filterConstant === 'classical'
                        ? 'bg-classical-200'
                        : `${filterConstant}` === `counting`
                        ? 'bg-counting-200'
                        : `${filterConstant}` === `scalabale`
                        ? 'bg-scalable-200'
                        : `${filterConstant}` === `partitioned`
                        ? 'bg-partitioned-200'
                        : `${filterConstant}` === `cuckoo`
                        ? 'bg-cuckoo-200'
                        : 'bg-default-200'
                    }`}
                  >
                    <th scope='col' className='px-6 py-3 tracking-widest'>
                      ID
                    </th>
                    <th scope='col' className='px-6 py-3 tracking-widest'>
                      Input Type
                    </th>
                    <th scope='col' className='px-6 py-3 tracking-widest'>
                      Data
                    </th>
                    <th scope='col' className='px-6 py-3 tracking-widest'>
                      Size
                    </th>
                    <th scope='col' className='px-6 py-3 tracking-widest'>
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className='relative'>
                  {userData &&
                    userData.map((user, index) => (
                      <tr className='border-b border-gray-200' key={index}>
                        <th
                          scope='row'
                          className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${
                            filterConstant === 'classical'
                              ? 'bg-classical-100'
                              : `${filterConstant}` === `counting`
                              ? 'bg-counting-100'
                              : `${filterConstant}` === `scalabale`
                              ? 'bg-scalable-100'
                              : `${filterConstant}` === `partitioned`
                              ? 'bg-partitioned-100'
                              : `${filterConstant}` === `cuckoo`
                              ? 'bg-cuckoo-100'
                              : 'bg-default-100'
                          }`}
                          title={user._id}
                        >
                          {user._id.length > 10
                            ? user._id.substring(0, 11) + '...'
                            : user._id}
                        </th>
                        <td className='px-6 py-4'>{user.type}</td>
                        <td
                          className={`px-6 py-4 bg-${filterConstant}-100`}
                          title={user.item}
                        >
                          {user.item.length > 10
                            ? user.item.substring(0, 11) + '...'
                            : user.item}
                        </td>
                        <td className='px-6 py-4'>{user.size}</td>
                        <td className={`px-6 py-4 bg-${filterConstant}-100`}>
                          {user.created}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='h-[250px] flex flex-col items-center justify-center'>
              <Image
                src='/images/user-database.png'
                width={200}
                height={200}
                alt='users'
              />
              <span>Choose a Filter to Start</span>
            </div>
          )}

          {/* <div>Existing users in the database:</div> */}
          {/* <div className='leading-10 flex flex-wrap gap-2'> */}
          {/* {sampleUser.map((user, index) => (
              <span
                key={index}
                className='bg-[#94AF9F] py-1 px-2 text-white rounded-md'
              >
                {user}
              </span>
            ))} */}
          {/* </div> */}
          {/* //! Table Implementation */}
          {/* <div className='h-[250px] overflow-scroll p-0'> */}

          {/* </div> */}
        </div>
        <div className='bg-white py-2 px-4 drop-shadow-md mb-4 rounded-lg flex gap-2 items-center'>
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
              d='M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122'
            />
          </svg>
          {/* <span>Action Area</span> */}
          {filterConstant !== '' &&
          (apiActionConstant === '' || apiActionConstant === 'all') ? (
            <>
              <span className='bg-warning text-white py-1 px-2 rounded drop-shadow-md'>
                Action Area. Choose an action to perform
              </span>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 animate-bounce'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
                  />
                </svg>
              </div>
            </>
          ) : (
            <span
              className={`${
                filterConstant === '' || apiActionConstant === 'all'
                  ? 'bg-disabledBase'
                  : 'bg-success'
              }  text-white py-1 px-2 rounded drop-shadow-md`}
            >
              {(filterConstant === '' && apiActionConstant === '') ||
              apiActionConstant === 'all'
                ? 'Action Area'
                : 'Action chosen for execution'}
            </span>
          )}
        </div>
        <div className='bg-white mb-32 rounded-lg drop-shadow-md grid grid-cols-2 px-4'>
          <div className='p-4 border-r relative'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
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

              <div className='flex gap-8'>
                <button
                  className={`${
                    apiActionConstant === 'create' &&
                    'border-2 border-success bg-tableSuccessTrans text-success'
                  } p-2 border rounded-md cursor-pointer drop-shadow-lg disabled:drop-shadow-none disabled:bg-offWhiteBase disabled:cursor-not-allowed`}
                  disabled={filterConstant === ''}
                  onClick={() => filterConstant && toggleAction('create')}
                >
                  Create
                </button>
                <button
                  className={`${
                    apiActionConstant === 'search' &&
                    'border-2 border-success bg-tableSuccessTrans text-success'
                  } p-2 border rounded-md cursor-pointer drop-shadow-lg disabled:drop-shadow-none disabled:bg-offWhiteBase disabled:cursor-not-allowed`}
                  disabled={filterConstant === ''}
                  onClick={() => filterConstant && toggleAction('search')}
                >
                  Search
                </button>
              </div>
            </div>
            <input
              type='text'
              id='large-input'
              placeholder='Enter a username ...'
              disabled={filterConstant === '' || apiActionConstant === ''}
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              className='drop=shadow-md block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500 mb-6 mt-3 disabled:bg-offWhiteBase disabled:cursor-not-allowed'
            />
            <button
              type='button'
              disabled={
                filterConstant === '' ||
                apiActionConstant === 'all' ||
                apiActionConstant === ''
              }
              className='drop-shadow-lg gap-3 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 my-8 justify-center absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] disabled:bg-disabledBase disabled:cursor-not-allowed'
              onClick={handleApiCall}
            >
              {isLoading ? (
                <ButtonLoader />
              ) : (
                <>
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
                  Execute
                </>
              )}
            </button>
          </div>
          <div className='px-4 pt-4 overflow-clip'>
            <div className='flex gap-2 mb-3 flex-col items-center'>
              <div className='flex justify-between w-full items-center'>
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
                      d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
                    />
                  </svg>
                  <span> Recent Result (Response)</span>
                </div>
                <div className='flex gap-3 items-center'>
                  {statusCode ? (
                    statusCode === 200 || statusCode === 201 ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-8 h-8 text-success'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-8 h-8 text-failure'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    )
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-warning'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                      />
                    </svg>
                  )}
                  <div className='flex'>
                    {statusCode ? (
                      statusCode === 200 || statusCode === 201 ? (
                        <span className='bg-success text-white py-1 px-2 rounded-md drop-shadow-lg'>
                          Success
                        </span>
                      ) : (
                        <span className='bg-failure text-white py-1 px-2 rounded-md drop-shadow-lg'>
                          Error
                        </span>
                      )
                    ) : (
                      <span className='bg-warning text-white py-1 px-2 rounded-md drop-shadow-lg'>
                        No calls yet.
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  statusCode
                    ? statusCode === 200 || statusCode === 201
                      ? 'text-success'
                      : 'text-failure'
                    : 'text-warning'
                } flex flex-col justify-center px-1 w-full text-lg font-semibold`}
              >
                {message}
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white drop-shadow-md rounded-lg mb-4 p-2 flex gap-2'>
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
              d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
            />
          </svg>
          <span>Advanced Developer Section</span>
        </div>
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
          statusCode={statusCode}
        />
        <div className='w-[calc(100vw-310px)] h-96 bg-white drop-shadow-md rounded-lg p-10 overflow-scroll text-[18px] mb-8'>
          <JsonViewer value={rawData} />
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

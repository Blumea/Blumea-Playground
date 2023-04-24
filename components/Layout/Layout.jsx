import Header from './Header'
import useWindowSize from '@/utils/useWindowSize'
import ScreenFallback from '../ScreenFallback/ScreenFallback'
import { useState } from 'react'
import HomeLoader from "../Loader/HomeLoader"

const Layout = (props) => {
  const [isLoading ,setLoading] = useState(true)
  const { width } = useWindowSize()
  setTimeout(() => {
    setLoading(false)
  },[1500])
  return width > 1065 ? (
    <>
      {isLoading ? (
        <HomeLoader />
      ) : (
        <>
          {' '}
          <Header />
          <main className='bg-[#ecf0f3]'>{props.children}</main>
        </>
      )}
    </>
  ) : (
    <ScreenFallback />
  )
}

export default Layout

import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className='bg-[#ecf0f3] min-h-[95vh]'>{props.children}</main>
    </>
  )
}

export default Layout

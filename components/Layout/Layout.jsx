import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className='bg-[#ecf0f3]'>{props.children}</main>
    </>
  )
}

export default Layout

import { Outlet } from 'react-router'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div className='max-w-[1440px] mx-auto lg:px-10 pt-2 font-nunito'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App

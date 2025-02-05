import { Outlet } from 'react-router'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

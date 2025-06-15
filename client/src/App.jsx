import {createBrowserRouter , RouterProvider} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Product from './pages/Product';
import BuildKit from './pages/BuildKit';
import PremadeKit from './pages/PremadeKit';
import Search from './pages/Search';
import './App.css'
import './index.css'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }, 
    {
      path: '/cart',
      element: <Cart/>
    }, 
    {
      path: '/product',
      element: <Product/>
    }, 
    {
      path: '/build-kit',
      element: <BuildKit/>
    }, 
    {
      path: '/premade-kit',
      element: <PremadeKit/>
    }, 
 
    {
      path: '/search',
      element: <Search/>
    }, 
 
    
   
   
  ])

  return (
  


      <>
        <Navbar/>
        <RouterProvider router={router}/>
        {/* <Footer/> */}
      </>
    
  )
}

export default App;

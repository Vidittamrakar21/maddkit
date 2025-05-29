import {createBrowserRouter , RouterProvider} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import './App.css'



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
 
    
   
   
  ])

  return (
  


      <>
        <Navbar/>
        <RouterProvider router={router}/>
        <Footer/>
      </>
    
  )
}

export default App;

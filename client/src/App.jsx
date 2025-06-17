import {createBrowserRouter , RouterProvider} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Product from './pages/Product';
import BuildKit from './pages/BuildKit';
import PremadeKit from './pages/PremadeKit';
import Search from './pages/Search';
import AllProduct from './pages/AllProduct';
import CheckoutPage from './pages/Checkout';
import OrderPage from './pages/Order';
import RewardPage from './pages/Reward';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import OrderTrackingPage from './pages/TrackOrder';
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
    {
      path: '/allproducts',
      element: <AllProduct/>
    }, 
    {
      path: '/checkout',
      element: <CheckoutPage/>
    }, 
 
    {
      path: '/orders',
      element: <OrderPage/>
    }, 
    {
      path: '/rewards',
      element: <RewardPage/>
    }, 
    {
      path: '/profile',
      element: <ProfilePage/>
    }, 
 
    {
      path: '/trackorder',
      element: <OrderTrackingPage/>
    }, 
    {
      path: '/login',
      element: <LoginPage/>
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

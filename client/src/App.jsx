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
import Category from './pages/Category';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css'
import './index.css'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
              <Navbar/>
              <Home/>
              </> 
    }, 
    {
      path: '/cart',
      element:<>
              <Navbar/>
              <Cart/>
              </>  
    }, 
    {
      path: '/product',
      element: <>
      <Navbar/>
      <Product/>
      </>
    }, 
    {
      path: '/build-kit',
      element: <>
      <Navbar/>
      <BuildKit/>
      </>
    }, 
    {
      path: '/premade-kit',
      element:<>
      <Navbar/>
      <PremadeKit/>
      </> 
    }, 
 
    {
      path: '/search',
      element: <>
      <Navbar/>
      <Search/>
      </>
    }, 
    {
      path: '/allproducts',
      element:<>
      <Navbar/>
      <AllProduct/>
      </> 
    }, 
    {
      path: '/checkout',
      element: <>
      <Navbar/>
      <CheckoutPage/>
      </>
    }, 
 
    {
      path: '/orders',
      element:<>
      <Navbar/>
      <OrderPage/>
      </> 
    }, 
    {
      path: '/rewards',
      element: <>
      <Navbar/>
      <RewardPage/>
      </>
    }, 
    {
      path: '/profile',
      element: <>
      <Navbar/>
      <ProfilePage/>
      </>
    }, 
 
    {
      path: '/trackorder',
      element:<>
      <Navbar/>
      <OrderTrackingPage/>
      </> 
    }, 
    {
      path: '/login',
      element:<>
      <Navbar/>
      <LoginPage/>
      </>
    }, 
    {
      path: '/category',
      element:<>
      <Navbar/>
      <Category/>
      </>
    }, 
 
    
   
   
  ])

  return (
  


      <>
           <GoogleOAuthProvider clientId="848050733143-cnbakntf40ekhb93m8ek0mu10sdo26jn.apps.googleusercontent.com">
            <RouterProvider router={router}/>
           </GoogleOAuthProvider>
  
      </>
    
  )
}

export default App;

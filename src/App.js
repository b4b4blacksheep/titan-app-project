import './App.css';
import { useState } from 'react'
import { UserProvider } from './UserContext'
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Order from './pages/Order';
import OrderPanel from './components/OrderPanel';
import UserSettings from './components/UserSettings';
import ProductUpdate from './pages/ProductUpdate';
import Recover from './pages/Forget';
import Logout from './pages/Logout';
import Products from './pages/Products';
import ProductView from './components/ProductView';
import ErrorPage from './pages/ErrorPage';
import Error from './components/Error';

import Footwear from './pages/Footwear';
import Apparel from './pages/Apparel';
import Accessories from './pages/Accessories';

import ContactUs from './components/AppContactUs'
import About from './pages/About'
import PageStoreLocator from './components/PageStoreLocator'
import PageBarbershop from './components/PageBarbershop'
import PageCareers from './components/PageCareers'

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 

 

function App() {
  const [ user, setUser ] = useState({
      id: null,
      isAdmin: null
  })

  const unsetUser = () => {
    localStorage.clear()
  }

  return (
    <>
  {/*Provides the user context throughout any component inside of it.*/}
    <UserProvider value={{user, setUser, unsetUser}}>
        {/*Initializes that dynamic routing will be involved*/}
        <Router>
        <AppNavbar/>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="*" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/recover" element={<Recover/>}/>

              <Route path="/collections/footwear" element={<Footwear/>}/> 
              <Route path="/collections/apparel" element={<Apparel/>}/> 
              <Route path="/collections/accessories" element={<Accessories/>}/> 

              <Route path="/products/:productId" element={<ProductView/>}/>


              <Route path="/admin-dashboard" element={<Home/>}/>
              <Route path="/admin/order-panel" element={<OrderPanel/>}/>
              <Route path="/admin/user-settings" element={<UserSettings/>}/>


              {/*<Route path="/admin" element={<Admin/>}/>*/}
{/*           
              <Route exact path="/:productId/update-product" element={<ProductUpdate/>}/>
              <Route path="/admin" element={<Admin/>}/>

              <Route path="/admin/add-product" element={<AddProduct/>}/>
              <Route path="/admin/inventory-panel" element={<AdminPanel/>}/>
              <Route path="/admin/order-panel" element={<OrderPanel/>}/>
              <Route path="/admin/user-settings" element={<UserSettings/>}/>

              <Route path="/login" element={<Login/>}/>
              <Route path="/recover" element={<Recover/>}/>
              
              <Route path="/logout" element={<Logout/>}/>
              <Route path="*" element={<ErrorPage/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/warning" element={<Error/>}/>*/}
              <Route path="/products" element={<Products/>}/>
              <Route path="/pages/contact-us" element={<ContactUs/>}/>
              <Route path="/pages/about" element={<About/>}/>
              <Route path="/pages/store-locator" element={<PageStoreLocator />}/>
              <Route path="/pages/barbershop" element={<PageBarbershop />}/>
              <Route path="/pages/careers" element={<PageCareers />}/>    
            </Routes>
          </Container>
        <AppFooter/>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
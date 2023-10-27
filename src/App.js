import { useState, lazy, Suspense } from 'react';
import { UserProvider } from './UserContext';

import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import ScrollToTop from './components/ScrollToTop';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const ProductView = lazy(() => import('./components/ProductView'));
const Address = lazy(() => import('./pages/Address'));
const Account = lazy(() => import('./pages/Account'));
const ShopAll = lazy(() => import('./pages/ShopAll'));
const Brands = lazy(() => import('./pages/Brands'));
const Footwear = lazy(() => import('./pages/Footwear'));
const Apparel = lazy(() => import('./pages/Apparel'));
const Accessories = lazy(() => import('./pages/Accessories'));
const Cart = lazy(() => import('./pages/Cart'));
const AdminProductView = lazy(() => import('./components/AdminProductView'));
const ContactUs = lazy(() => import('./components/AppContactUs'));
const About = lazy(() => import('./pages/About'));
const PageStoreLocator = lazy(() => import('./components/PageStoreLocator'));
const PageBarbershop = lazy(() => import('./components/PageBarbershop'));
const PageCareers = lazy(() => import('./components/PageCareers'));
const Faqs = lazy(() => import('./components/Faqs'));

const PageSizeGuide = lazy(() => import('./components/PageSizeGuide'));

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  const unsetUser = () => {
    localStorage.clear();
  };

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <ScrollToTop />
          <AppNavbar />
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="*" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/products/:productId" element={<ProductView/>}/>

                  <Route path="/account/addresses" element={<Address/>}/>

                  <Route path="/login" element={<Login/>}/>
                  <Route path="/account" element={<Account/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/cart" element={<Cart/>}/>

                  <Route path="/collections/shop-all" element={<ShopAll/>}/> 
                  <Route path="/collections/brands" element={<Brands/>}/> 
                  <Route path="/collections/footwear" element={<Footwear/>}/> 
                  <Route path="/collections/apparel" element={<Apparel/>}/> 
                  <Route path="/collections/accessories" element={<Accessories/>}/>

                  <Route path="/pages/contact" element={<ContactUs/>}/>
                  <Route path="/pages/about" element={<About/>}/>
                  <Route path="/pages/store-locator" element={<PageStoreLocator />}/>
                  <Route path="/pages/barbershop" element={<PageBarbershop />}/>
                  <Route path="/pages/careers" element={<PageCareers />}/> 
                  <Route path="/pages/faqs" element={<Faqs />}/> 

                  <Route path="/pages/size-guide" element={<PageSizeGuide />}/>   

                  {/*Admin Routes*/}
                  <Route path="/admin/:productId" element={<AdminProductView/>}/>
              </Routes>
            </Suspense>
          </Container>
          <AppFooter />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;

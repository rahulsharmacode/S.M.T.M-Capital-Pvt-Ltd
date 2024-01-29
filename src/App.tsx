import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css'
import './assets/css/home.css'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import PortfolioDetails from './pages/portfoliodetails';
import StockDetails from './pages/stockdetails';
import ScrollToTop from './utils/ScrollToTop';
import ContextProvider from './contextapi/ContextProvider';

const App = () => {
  return (<>
  <ScrollToTop />
  <ContextProvider>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/protfolio-details/:slug' element={<PortfolioDetails />} />
    <Route path='/protfolio/stock-details/:slug' element={<StockDetails />} />
  </Routes>
  </ContextProvider>
  
  </>)
}

export default App
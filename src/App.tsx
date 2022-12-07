import { Route, Routes } from 'react-router-dom'
import { OnlineShopContextProvider } from './context/OnlineShopContext'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import LoginForm from './components/LoginForm/LoginForm'
import MainPage from './components/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import StationaryStores from './components/StationaryStores/StationaryStores'
import ProductsList from './components/ProductsList/ProductsList'
import './App.scss'

function App() {

  return (
    <OnlineShopContextProvider>
      <Navigation />
      <div className='page'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/stationary-stores' element={<StationaryStores />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/products' element={<ProductsList />} />
        </Routes>
      </div>
    </OnlineShopContextProvider>
  );
}

export default App

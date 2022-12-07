import { useContext, useState } from 'react'
import { OnlineShopContext } from '../../context/OnlineShopContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import langIcon from '../../images/lang-icon.png'
import cartIcon from '../../images/shopping-cart.png'
import hamburgerIcon from '../../images/hamburger-icon.png'
import './Navigation.scss'
import NavigationMobile from './NavigationMobile'

const Navigation = () => {
  const { productsList, cookies, removeCookie, dispatchUser, setShowShopCart } = useContext(OnlineShopContext)
  const isUserLogged = cookies['access-token'] != null
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
  const navigate = useNavigate()
  const [showNavMobile, setShowNavMobile] = useState(false)

  const onLogout = () => {
    navigate('/login')
    removeCookie('access-token', { secure: true, sameSite: 'none' })
    dispatchUser({ type: 'CHANGE_USER', payload: { email: "", password: "" } },
    )
  }

  return (
    <>
      <div className='navigation'>
        {isDesktop &&
          <>
            <div className='navigation__links'>
              <NavLink to='/'>Strona główna</NavLink>
              <NavLink to='/about'>O sklepie</NavLink>
              <NavLink to='/stationary-stores'>Sklepy Stacjonarne</NavLink>
            </div>
            <Link to='/' className='navigation__title'>Kuniklo mondo</Link>
            <div className='navigation__links'>
              <NavLink to='/products'>Produkty</NavLink>
              <NavLink to='/contact'>Kontakt</NavLink>
              {isUserLogged ?
                <button className='navigation__links--logout' onClick={onLogout}>Wyloguj się</button> :
                <NavLink to='/login'>Zaloguj się</NavLink>
              }
              <div>
                <button className={'icon__buttonCart'} onClick={() => setShowShopCart(true)}><img src={cartIcon} alt='cart-icon' className='icon__image' /></button>
                <button className={'icon__button'} onClick={() => { }}><img src={langIcon} alt='language-icon' className='icon__image' /></button>
                {productsList.length > 0 && <div className='navigation__badge'>{productsList.length}</div>}
              </div>
            </div>
          </>
        }
        {!isDesktop &&
          <>
            <Link to='/' className='navigation__title'>Kuniklo mondo</Link>
            <button className='icon__button' onClick={() => setShowNavMobile(!showNavMobile)}><img src={hamburgerIcon} alt='hamburger-icon' className='icon__image' /></button>
            {showNavMobile && <NavigationMobile />}
          </>
        }
      </div>
    </>
  )
}

export default Navigation
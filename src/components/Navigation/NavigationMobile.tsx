import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OnlineShopContext } from '../../context/OnlineShopContext'
import langIcon from '../../images/lang-icon.png'
import cartIcon from '../../images/shopping-cart.png'
import './Navigation.scss'

const NavigationMobile = () => {
  const { setShowShopCart } = useContext(OnlineShopContext)

  return (
    <div className='navigationMobile'>
      <div className='navigationMobile__buttons'>
        <button className={'icon__buttonCart'} onClick={() => setShowShopCart(true)}><img src={cartIcon} alt='cart-icon' className='icon__image' /></button>
        <button className={'icon__button'} onClick={() => { }}><img src={langIcon} alt='language-icon' className='icon__image' /></button>
      </div>
      <div className='navigation__links'>
        <NavLink to='/'>Strona główna</NavLink>
        <NavLink to='/about'>O sklepie</NavLink>
        <NavLink to='/stationary-stores'>Sklepy Stacjonarne</NavLink>
        <NavLink to='/products'>Produkty</NavLink>
        <NavLink to='/contact'>Kontakt</NavLink>
        <NavLink to='/login'>Zaloguj się</NavLink>
      </div>
    </div>
  )
}

export default NavigationMobile
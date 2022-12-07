import { useContext } from 'react'
import { OnlineShopContext } from '../../context/OnlineShopContext'
import ProductCard from '../ProductCard/ProductCard'
import './ShopCart.scss'

const ShopCart = () => {
  const { productsList, setShowShopCart } = useContext(OnlineShopContext)
  const sum = 0;
  const totalPrice = productsList.map((p) => p.price).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum
  );

  return (
    <>
      <div className='backdrop' />
      <div className='modal'>
        <span>Twój Koszyk</span>
        {productsList.length !== 0 && <>Wartość koszyka: {totalPrice}$</>}
        {productsList.length === 0 && <>Twój koszyk jest pusty</>}
        {productsList.map((product) =>
          <ProductCard key={product.id} product={product} isCart />
        )}
        <button className='modal__button' onClick={() => setShowShopCart(false)}>Zamknij</button>
      </div>
    </>
  )
}

export default ShopCart
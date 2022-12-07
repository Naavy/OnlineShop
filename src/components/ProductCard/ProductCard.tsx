import { useContext } from 'react';
import { OnlineShopContext } from '../../context/OnlineShopContext';
import { ProductType } from '../../types/Product'
import './ProductCard.scss'

const ProductCard = ({ product, isCart }: { product: ProductType, isCart: boolean }) => {
  const { dispatchProductsList } = useContext(OnlineShopContext);

  return (
    <div className='productCard'>
      <span className='productCard__title'>{product.title}</span>
      <img src={product.image} alt={product.title} className='productCard__image' />
      <div className='productCard__footer'>
        <span className='productCard__price'>{product.price.toString()}$</span>
        {isCart ?
          <button className='productCard__button' onClick={() => dispatchProductsList({ type: 'REMOVE_PRODUCT', payload: product })}>Usuń</button>
          :
          <button className='productCard__button' onClick={() => dispatchProductsList({ type: 'ADD_PRODUCT', payload: product })}>Dodaj +</button>
        }
      </div>
    </div>
  )
}

export default ProductCard
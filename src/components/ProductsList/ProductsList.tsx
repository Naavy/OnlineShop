import useFetch from "react-fetch-hook"
import { ProductType } from '../../types/Product'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.scss'

const ProductsList = () => {
  const apiUrl = 'https://fakestoreapi.com/products/'
  const { isLoading, data, error } = useFetch<ProductType[]>(apiUrl);

  if (error)
    return (
      <>Coś poszło nie tak. Spróbuj odświeżyć stronę lub spróbuj ponownie później.</>
    );

  if (isLoading) return <>Ładowanie danych....</>;

  return (
    <div className='list'>
      {data != null && data.map((product) => <ProductCard key={product.id} product={product} isCart={false} />)}
    </div>
  )
}

export default ProductsList


import { createContext, useEffect, useReducer, useState } from "react"
import { useCookies } from "react-cookie"
import { CookieSetOptions } from 'universal-cookie';
import ShopCart from "../components/ShopCart/ShopCart"
import { ProductsListReducer } from "../reducers/ProductsListReducer"
import { UserReducer } from "../reducers/UserReducer"
import { ProductType } from "../types/Product"
import { UserType } from "../types/User"

type OnlineShopContextType = {
  productsList: ProductType[] | []
  dispatchProductsList: React.Dispatch<{ type: string; payload: ProductType }>
  cookies: Record<string, string>
  setCookie: (name: 'access-token', value: string, options?: CookieSetOptions | undefined) => void
  removeCookie: (name: 'access-token', options?: CookieSetOptions | undefined) => void
  currentUser: UserType | null
  dispatchUser: React.Dispatch<{ type: string; payload: UserType }>
  showShopCart: boolean
  setShowShopCart: (showShopCart: boolean) => void
};

export const OnlineShopContext = createContext<OnlineShopContextType>(
  {} as OnlineShopContextType
);

export const OnlineShopContextProvider = ({ children }: any) => {
  const [showShopCart, setShowShopCart] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['access-token']);
  const [productsList, dispatchProductsList] = useReducer(ProductsListReducer, {}, () => {
    const localData = localStorage.getItem("productsList");
    return localData ? JSON.parse(localData) : [];
  });
  const [currentUser, dispatchUser] = useReducer(UserReducer, {}, () => {
    const localData = localStorage.getItem("currentUser");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("productsList", JSON.stringify(productsList));
  }, [productsList]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <OnlineShopContext.Provider
      value={{
        productsList,
        dispatchProductsList,
        cookies,
        setCookie,
        removeCookie,
        currentUser,
        dispatchUser,
        showShopCart,
        setShowShopCart
      }}
    >
      {showShopCart && <ShopCart />}
      {children}
    </OnlineShopContext.Provider>
  );
};
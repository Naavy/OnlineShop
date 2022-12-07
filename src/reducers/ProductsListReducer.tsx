import { ProductType } from "../types/Product";

export const ProductsListReducer = (
  state: any,
  action: { type: string; payload: ProductType }
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image
        }
      ];
    case "REMOVE_PRODUCT":
      return state.filter((product: ProductType) => action.payload.id !== product.id);
    default:
      return state;
  }
};

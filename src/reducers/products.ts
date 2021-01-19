// need to import the actions
import { Products, Product } from '../types';
import { actions } from '../actions/constants';

const initialState: Products = {
  products: [
    {
      id: '1a',
      title: 'MacBook Pro',
      value: 2000,
      quantity: 3
    },
    {
      id: '2b',
      title: 'iPad',
      value: 1200,
      quantity: 6
    },
    {
      id: '3c',
      title: 'iPod Classic',
      value: 400,
      quantity: 1
    },
  ],
  loading: false,
  error: false
};

const getProduct = (state: Products, selectedProduct: Product): Product[] =>
  state.products.map((product: Product) =>
    (product.id === selectedProduct.id ? { ...product, quantity: product.quantity - 1 } : product));

export const products = (state = initialState, action: any) => {
  
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        ...state,
      }
    case actions.ADD_TO_CART:
      return {
        ...state,
        products: getProduct(state, action.payload)
      }
    default:
      return {
        ...state
      }
  }
}
import ACTIONS from '@/constants/actions';
import { Product } from '@/types/product';
import { ProductsState } from './provider';

export type ProductsAction = { type: typeof ACTIONS.PRODCUTS.FETCH_PRODUCTS; payload: Product[] };

const productsReducer = (state: ProductsState, { type, payload }: ProductsAction) => {
  switch (type) {
    case ACTIONS.PRODCUTS.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;

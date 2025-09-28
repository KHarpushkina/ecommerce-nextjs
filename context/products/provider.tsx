import { createContext, useReducer, useMemo, Dispatch } from 'react';

import productsReducer, { ProductsAction } from './reducers';
import { Product } from '@/types/product';

export interface ProductsState {
  products: Product[];
}

interface ProductsProviderProps {
  data?: Record<string, unknown>;
  children?: React.ReactNode;
}

export const initialState: ProductsState = {
  products: [],
};

export const ProductsContext = createContext<
  | {
      state: ProductsState;
      dispatch: Dispatch<ProductsAction>;
    }
  | undefined
>(undefined);

const ProductsProvider = ({ data = {}, children = null }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(productsReducer, {
    ...data,
    ...initialState,
  });
  const resultState = useMemo(() => ({ state, dispatch }), [state]);

  return <ProductsContext.Provider value={resultState}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;

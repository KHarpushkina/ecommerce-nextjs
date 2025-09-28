import { ProductsContext } from '@/context/products/provider';
import { useContext } from 'react';

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within ProductsProvider');
  }
  return context;
}

export default useProductsContext;

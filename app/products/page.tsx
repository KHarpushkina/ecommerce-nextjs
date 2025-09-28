'use client';

import ProductsList from '@/components/products-list/products-list';
import ACTIONS from '@/constants/actions';
import { fetchProducts } from '@/services/fetch-products';
import { Product } from '@/types/product';
import useProductsContext from '@/utils/hooks/use-products-context';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useProductsContext();

  const getProducts = async () => {
    setLoading(true);
    let products: Product[] = [];

    try {
      products = await fetchProducts();
    } catch {
      console.log('Get Products Error');
    } finally {
      setLoading(false);
    }

    dispatch({
      type: ACTIONS.PRODCUTS.FETCH_PRODUCTS,
      payload: products,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ProductsList />
        </div>
      )}
    </>
  );
};

export default ProductsPage;

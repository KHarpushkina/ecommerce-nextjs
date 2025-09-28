import useProductsContext from '@/utils/hooks/use-products-context';
import ProductCard from '@/components/product-card/product-card';

const ProductsList = () => {
  const { state } = useProductsContext();
  const products = state.products;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <div key={product.id} className='m-2'>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

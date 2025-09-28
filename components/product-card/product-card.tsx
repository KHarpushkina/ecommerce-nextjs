import { Product } from '@/types/product';
import Button from '../shared/button';
import API_URL from '@/constants/config';
import { HeartIcon } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, category, price, image } = product;
  const imageUrl = image ? `${API_URL}${image}` : null;

  return (
    <div className="p-4 border rounded-xs border-black flex flex-col gap-2 ">
      <div className="self-end">
        <HeartIcon color="black" strokeWidth="1" className="hover:fill-emerald-800 cursor-pointer" />
      </div>
      <div>{imageUrl && <img alt="" src={imageUrl} />}</div>
      <div className="text-sm text-gray-700">{category.name}</div>
      <div className="font-semibold">{name}</div>
      <div className="font-semibold text-xl">${price}</div>
      <div className="self-end">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;

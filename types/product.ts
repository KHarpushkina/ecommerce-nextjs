import { Category } from './category';
import { Color } from './color';
import { Location } from './location';

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: Category;
  color: Color;
  location: Location;
  image?: string;
}

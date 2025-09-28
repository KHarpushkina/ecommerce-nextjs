import API_URL from "@/constants/config";
import { Product } from "@/types/product";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/product`);

    if (!res.ok) {
      throw new Error('Error');
    }
    
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

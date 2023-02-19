export interface IProductType {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  isFeatured?: boolean;
  banner?: string;
}

export interface IProductDataType {
  products: IProductType[];
}

export interface IProductAddForm {
  name: string;
  description: string;
  price: string;
}

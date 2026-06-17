export interface Product {
   id: number;
   name: string;
   category: string;
   brand: string;
   description: string;
   price: number;
   stock: number;
   warehouse: string;
}

export type CreateProduct = Omit<Product, "id">

// Omit = menghilangkan salah 1 attribute
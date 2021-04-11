import { createContext, FC, useContext, useEffect, useState } from "react";

import { formatPrice } from "../utils/format";

import api from "../services/api";

export interface IProduct {
  id: string;
  name: string;
  sellingPrice: number;
  imageUrl: string;
  priceFormatted: string;
}

interface ProductContextData {
  products: IProduct[];
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<IProduct[]>("/items");

      const prods = response.data.map((product) => {
        return {
          ...product,
          priceFormatted: formatPrice(product.sellingPrice),
        };
      });

      setProducts(prods);
    }

    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

function useProduct(): ProductContextData {
  const context = useContext(ProductContext);

  return context ?? ({} as ProductContextData);
}

export { ProductProvider, useProduct };

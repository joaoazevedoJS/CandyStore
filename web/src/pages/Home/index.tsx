import React, { FC, useCallback, useMemo } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { useProduct } from "../../hooks/useProduct";

import { ProductList } from "./styles";

interface CartItemsAmount {
  [key: string]: number;
}

const Home: FC = () => {
  const { products } = useProduct();
  const { cart, addProduct } = useCart();

  const cartItemsAmount = useMemo(() => {
    return cart.reduce((sumAmount, product) => {
      return {
        ...sumAmount,
        [product.id]: Number(product.amount),
      };
    }, {} as CartItemsAmount);
  }, [cart]);

  const handleAddProduct = useCallback(
    (id: string) => {
      addProduct(id);
    },
    [addProduct]
  );

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} />

          <strong>{product.name}</strong>

          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />

              {cartItemsAmount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export { Home };

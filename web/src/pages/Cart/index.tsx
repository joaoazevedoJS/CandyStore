import { FC, useMemo } from "react";
import { CartListItem } from "../../components/CartListItem";

import { useCart } from "../../hooks/useCart";

import { formatPrice } from "../../utils/format";

import { Container, ProductTable, Total } from "./styles";

const Cart: FC = () => {
  const { cart } = useCart();

  const total = useMemo(() => {
    return cart.reduce((sumTotal, product) => {
      const value = product.sellingPrice * (product.amount ?? 1);

      return sumTotal + value;
    }, 0);
  }, [cart]);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>

        <tbody>
          <CartListItem />
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        {total > 10 && <p>Parábens, sua compra tem frete grátis</p>}

        <Total>
          <span>TOTAL</span>

          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export { Cart };

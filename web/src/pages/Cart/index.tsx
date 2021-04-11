import { FC, useMemo } from "react";
import { CartListItem } from "../../components/CartListItem";

import { useCart } from "../../hooks/useCart";

import { formatPrice } from "../../utils/format";

import { Container, Total } from "./styles";

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
      <CartListItem />

      <footer>
        <button type="button">Finalizar pedido</button>

        <div>
          {total > 10 && <p>Parábens, sua compra tem frete grátis</p>}

          <Total>
            <span>TOTAL</span>

            <strong>{formatPrice(total)}</strong>
          </Total>
        </div>
      </footer>
    </Container>
  );
};

export { Cart };

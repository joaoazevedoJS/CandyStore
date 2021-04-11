import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import { useCart } from "../../hooks/useCart";

import { Container, Cart } from "./styles";

const Header: FC = () => {
  const { cart } = useCart();

  return (
    <Container>
      <Link to="/">Candy Store</Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>

          <span>
            {cart.length === 1 ? `${cart.length} item` : `${cart.length} itens`}
          </span>
        </div>

        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;

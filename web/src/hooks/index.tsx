import { FC } from "react";

import { ProductProvider } from "./useProduct";
import { CartProvider } from "./useCart";

const Providers: FC = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>;
    </ProductProvider>
  );
};

export { Providers };

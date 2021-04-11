import { FC, useCallback, useMemo } from "react";

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { formatPrice } from "../../utils/format";

import { ICart, useCart } from "../../hooks/useCart";

import { Container } from "./styles";

const CartListItem: FC = () => {
  const { cart, addProduct, updateProductAmount, removeProduct } = useCart();

  const cartFormatted = useMemo(() => {
    return cart.map((product) => ({
      ...product,
      sellingPriceFormatted: formatPrice(product.sellingPrice),
      total: product.sellingPrice * product.amount,
      totalFormatted: formatPrice(product.sellingPrice * (product.amount ?? 1)),
    }));
  }, [cart]);

  const handleProductIncrement = useCallback(
    (product_id: string) => {
      addProduct(product_id);
    },
    [addProduct]
  );

  const handleProductDecrement = useCallback(
    (product: ICart) => {
      updateProductAmount({
        product_id: product.id,
        amount: product.amount - 1,
      });
    },
    [updateProductAmount]
  );

  const handleRemoveProduct = useCallback(
    (product_id: string) => {
      removeProduct(product_id);
    },
    [removeProduct]
  );

  return (
    <Container>
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
        {cartFormatted.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.imageUrl} alt={product.name} />
            </td>

            <td>
              <strong>{product.name}</strong>
              <span>{product.sellingPriceFormatted}</span>
            </td>

            <td>
              <div>
                <button
                  type="button"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                >
                  <MdRemoveCircleOutline size={20} />
                </button>

                <input type="text" readOnly value={product.amount} />

                <button
                  type="button"
                  onClick={() => handleProductIncrement(product.id)}
                >
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>

            <td>
              <strong>{product.totalFormatted}</strong>
            </td>

            <td>
              <button
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export { CartListItem };

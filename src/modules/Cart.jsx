import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cart.length) {
      const ids = cart.map((item) => item.id).join(",");
      fetch(
        `https://cup-time-api-s9jb.onrender.com/api/products/list?ids=${ids}`,
      )
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) =>
          console.error("Error fetching cart products:", error),
        );
    } else {
      setProducts([]);
    }
  }, [cart]);

  const totalPrice = products.reduce((sum, product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    return sum + product.price * (cartItem ? cartItem.quantity : 0);
  }, 0);

  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина ({products.length})</h2>

        <ul className="cart__items">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return cartItem ? (
              <CartItem
                key={product.id}
                data={product}
                quantity={cartItem.quantity}
              />
            ) : null;
          })}
        </ul>

        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">{totalPrice}&nbsp;₽</p>
          <button className="cart__order-button">Заказать</button>
        </div>
      </div>
    </section>
  );
};

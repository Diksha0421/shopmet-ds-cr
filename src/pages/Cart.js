import { CartCard } from "../components";
import { UseTitle } from "../hooks/UseTitle";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { total, cartList } = useCart();

  UseTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList ? cartList?.length : 0} /${total}
        </h1>
        {cartList && cartList.map((product) => <CartCard product={product} />)}
      </section>
    </main>
  );
};

import "./CartCard.css";
import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { name, image, price } = product;
  const { removeFromCart } = useCart();

  return (
    <div className="cartCard">
      <img src={image} alt={image} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};

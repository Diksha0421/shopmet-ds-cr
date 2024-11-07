import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  const { addToCart, cartList, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find(
      (cartElement) => cartElement.id === id
    );
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [id, cartList]);

  return (
    <div className="productCard">
      <img src={image} alt={name} className="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {!isInCart ? (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        ) : (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

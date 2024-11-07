import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  const { cartList } = useCart();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Smart Shop Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="link">
        <span>Cart: {cartList?.length}</span>
      </Link>
    </header>
  );
};

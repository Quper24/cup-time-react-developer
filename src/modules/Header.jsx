import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      "category",
    );
    return currentCategory === category ? "active" : "";
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo-link">
          <img
            className="header__logo"
            src="image/logo.svg"
            alt="Логотип Cup Time"
          />
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("tea")}`}
                to="/products?category=tea">
                Чай
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("coffee")}`}
                to="/products?category=coffee">
                Кофе
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("teapots")}`}
                to="/products?category=teapots">
                Чайники
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("cezves")}`}
                to="/products?category=cezves">
                Турки
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("other")}`}
                to="/products?category=other">
                Прочее
              </Link>
            </li>
          </ul>
        </nav>

        <Link className="header__cart-link" to="/cart">
          {getTotalItems()}
        </Link>
      </div>
    </header>
  );
};

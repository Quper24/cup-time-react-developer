import { useState } from "react";
import Modal from "react-modal";
import { API_URL } from "../const";
import { useCart } from "../context/CartContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!data) {
    return null;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Product Modal">
      <h2>{data.title}</h2>
      <img src={`${API_URL}${data.img}`} alt={data.title} />
      <p>{data.price} ₽</p>
      <ul>
        {Object.entries(data.additional).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <div className="product-modal__controls">
        <button onClick={handleDecrease}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};

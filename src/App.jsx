import { Header } from "./modules/Header";
import { Main } from "./modules/Main";
import { Footer } from "./modules/Footer";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Main />
          <Footer />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;

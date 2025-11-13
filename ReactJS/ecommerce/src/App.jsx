
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids" />}
          ></Route>

          <Route path="/product" element={<Product />}></Route>
          <Route path="/:productId" element={<Product />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

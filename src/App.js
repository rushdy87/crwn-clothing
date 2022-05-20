import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.compnent";
import Home from "./routes/home/home.component";
import Authentication from "./routes/athentication/authentication.component";
import Shop from "./routes/shop/shop.component";
// import CartIcon from "./components/cart-icon/cart-icon.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
      {/* <Route path="cart" element={<CartIcon />} /> */}
    </Route>
  </Routes>
);

export default App;

// crwn-clothing-db-2a774

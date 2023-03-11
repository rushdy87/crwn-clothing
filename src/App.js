import { Routes, Route } from 'react-router-dom';

import { Navigation, Home } from './routes';

const Shop = () => <h1>Shop</h1>;

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  </Routes>
);

export default App;

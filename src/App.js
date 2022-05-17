import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.compnent";
import Home from "./routes/home/home.component";
import Authentication from "./routes/athentication/authentication.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
);

export default App;

// crwn-clothing-db-2a774

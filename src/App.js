import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.compnent";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="sign-in" element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;

// crwn-clothing-db-2a774

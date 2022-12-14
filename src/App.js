import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./routes/home";
import NavBar from "./components/NavBar/NavBar.component";

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="other" element={<h1>Other Route</h1>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;

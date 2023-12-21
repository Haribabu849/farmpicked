import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import TermsAndConditions from "./TermsAndConditions";
import ProductPage from "./components/ProductPage";
import CartPage from "./CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="FAQ" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
      <Route path="termsandconditions" element={<TermsAndConditions />} />
      <Route path="productpage/:id" element={<ProductPage />} />
      <Route path="cartpage" element={<CartPage />} />
    </Routes>
  );
}

export default App;

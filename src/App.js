import { Routes, Route } from "react-router-dom";

import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import TermsAndConditions from "./TermsAndConditions";
import ProductPage from "./components/ProductPage";
import CartPage from "./CartPage";
import Home2 from "./Home2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section>
      <Navbar />
      <div className="max-w-[90%] mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mt-24 scroll-smooth">
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="about" element={<About />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
          <Route path="productpage/:id" element={<ProductPage />} />
          <Route path="cartpage" element={<CartPage />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;

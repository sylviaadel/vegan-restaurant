import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import HomePage from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/Shared/Footer";
import NotFound from "./pages/NotFound";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Category/:name" element={<Category />} />
        <Route path="/:category/:productId" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path={`${category.id}`} element={<Category props={id} />} /> */}
        <Route path="/Category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

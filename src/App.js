import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

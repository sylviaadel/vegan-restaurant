import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={mainLogo} alt="A fork and a spoon along with a leaf." />
      </Link>
      <ul>
        <li>
          <Link to="/Category">Dishes</Link>
        </li>
        <li>
          <Link to="/Category">Desserts</Link>
        </li>
        <li>
          <Link to="/Category">Drinks</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

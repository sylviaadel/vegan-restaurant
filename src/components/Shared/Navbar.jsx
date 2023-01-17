import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={mainLogo} alt="A fork and a spoon along with a leaf." />
      </Link>
      <ul>
        <li>Dishes</li>
        <li>Desserts</li>
        <li>Drinks</li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

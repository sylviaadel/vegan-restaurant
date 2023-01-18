import { Link } from "react-router-dom";
import categories from "../../Data/categories.json";
import mainLogo from "../../assets/images/logo.png";

export default function Navbar() {
  const categoriesList = categories.map((category) => (
    <li key={category.id}>
      <Link to={category.link}>{category.name}</Link>
    </li>
  ));
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={mainLogo} alt="A fork and a spoon along with a leaf." />
      </Link>
      <ul>
        {categoriesList}
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

import mainLogo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={mainLogo} alt="A fork and a spoon along with a leaf." />
      <ul>
        <li>Dishes</li>
        <li>Desserts</li>
        <li>Drinks</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

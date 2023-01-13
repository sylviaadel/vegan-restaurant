import category from "../Data/categories.json";
import arrowRight from "../assets/images/chevron-right.png";
import { Link } from "react-router-dom";

const categoriesItems = category.map((category) => (
  <section key={category.id}>
    <div>
      <div className="CategoryImgContainer">
        <img src={`images/${category.image}`} alt={category.alt} />
      </div>
      <h2>{category.name}</h2>
      <p>{category.desc}</p>
      <Link to={`${category.id}`}>
        <img src={arrowRight} alt="Chevron Right" /> View menu
      </Link>
    </div>
  </section>
));
export default function CategoriesContainer() {
  return <div className="CategoriesContainer">{categoriesItems}</div>;
}

import categories from "../../Data/categories.json";
import arrowRight from "../../assets/images/chevron-right.png";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  const categoriesList = categories.map((category) => (
    <section key={category.id}>
      <div>
        <div className="CategoryImgContainer">
          <img src={`images/categories/${category.image}`} alt={category.alt} />
        </div>
        <div>
          <h2>{category.name}</h2>
          <p>{category.desc}</p>
          <Link to={`/${category.name}`}>
            <img src={arrowRight} alt="Chevron Right" /> View menu
          </Link>
        </div>
      </div>
    </section>
  ));
  return <div className="CategoriesContainer">{categoriesList}</div>;
}

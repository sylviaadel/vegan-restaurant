import categories from "../../data/categories.json";
import arrowRight from "../../assets/images/chevron-right.png";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  // Repetition -1
  // This component CategoriesContainer is a <section>
  // The item you loop is a <article>
  const categoriesList = categories.map((category) => (
    <article key={category.id}>
      <div>
        <div className="CategoryImgContainer">
          <img src={`images/categories/${category.image}`} alt={category.alt} />
        </div>
        <div>
          <h2>{category.name}</h2>
          <p>{category.desc}</p>
          <Link to={`/category/${category.name}`}>
            <img src={arrowRight} alt="Chevron Right" /> View menu
          </Link>
        </div>
      </div>
    </article>
  ));

  return <section className="CategoriesContainer">{categoriesList}</section>;
}

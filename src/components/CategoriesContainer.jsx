import category from "../Data/categories.json";
import arrowRight from "../assets/images/chevron-right.png";

const categoriesItems = category.map((category) => (
  <section>
    <div>
      <div className="CategoryImgContainer">
        <img src={`images/${category.image}`} alt={category.alt} />
      </div>
      <h2>{category.name}</h2>
      <p>{category.desc1}</p>
      <p>{category.desc2}</p>
      <a href={category.link}>
        <img src={arrowRight} alt="Chevron Right" /> View menu
      </a>
    </div>
  </section>
));
export default function CategoriesContainer() {
  return <div className="CategoriesContainer">{categoriesItems}</div>;
}

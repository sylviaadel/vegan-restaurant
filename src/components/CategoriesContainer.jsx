import categories from "../Data/categories.json";
import arrowRight from "../assets/images/chevron-right.png";

const categoriesItems = categories.map((categories) => (
  <section>
    <div>
      <div className="CategoryImgContainer">
        <img src={`images/${categories.image}`} alt={categories.alt} />
      </div>
      <h2>{categories.name}</h2>
      <p>{categories.desc1}</p>
      <p>{categories.desc2}</p>
      <a href={categories.link}>
        <img src={arrowRight} alt="Chevron Right" /> View menu
      </a>
    </div>
  </section>
));
export default function CategoriesContainer() {
  return <div className="CategoriesContainer">{categoriesItems}</div>;
}

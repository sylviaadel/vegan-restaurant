import category from "../Data/categories.json";

const categoriesItems = category.map((category) => (
  <header className="category-header" key={category.id}>
    <img src={`images/${category.image}`} alt={category.alt} />
    <h1>{category.title}</h1>
  </header>
));
export default function Category(id) {
  return <>{categoriesItems}</>;
}

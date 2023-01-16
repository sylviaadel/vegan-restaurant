import category from "../Data/categories.json";
import ProductsContainer from "../components/ProductsContainer";

const categoriesItems = category.map((category) => (
  <div key={category.id}>
    <header className="category-header" key={category.id}>
      <img src={`images/${category.image}`} alt={category.alt} />
      <h1>{category.title}</h1>
    </header>
    <div className="category-content">
      <p>{category.desc}</p>
      <ProductsContainer />
    </div>
  </div>
));
export default function Category(props) {
  return <>{categoriesItems}</>;
}

import categories from "../Data/categories.json";
import ProductsContainer from "../components/ProductsContainer";
import { useParams } from "react-router-dom";

export default function Category(props) {
  let { name } = useParams();
  let currentCategory = categories.find((c) => c.name === name);
  return (
    <>
      <header className="category-header" key={currentCategory.id}>
        <img
          src={`../images/categories/${currentCategory.image}`}
          alt={currentCategory.alt}
        />
        <h1>{currentCategory.title}</h1>
      </header>
      <div className="category-content">
        <p>{currentCategory.desc}</p>
        <ProductsContainer category={currentCategory} />
      </div>
    </>
  );
}

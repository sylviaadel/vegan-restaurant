import { Link, useParams } from "react-router-dom";
import categories from "../data/categories.json";
import Ingredients from "../components/Product/Ingredients";
import NutritionFacts from "../components/Product/NutritionFacts";

export default function Product() {
  let { category, productId } = useParams();
  let currentCategory = categories.find((c) => c.name === category);
  let currentProduct = currentCategory.products.find((p) => p.id === productId);

  return (
    <section key={currentProduct.id}>
      <header className="product-header">
        <img
          src={`../images/products/${currentProduct.img}`}
          alt={currentProduct.alt}
        />
        <h2>{currentProduct.name}</h2>
      </header>
      <div className="product-content">
        <p>{currentProduct.desc}</p>
        <Ingredients product={currentProduct} />
        <NutritionFacts product={currentProduct} />
        <Link to={`/category/${currentCategory.name}`} className="primary-btn">
          Go Back
        </Link>
      </div>
    </section>
  );
}

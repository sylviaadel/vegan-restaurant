import Ingredients from "../components/Product/Ingredients";
import NutritionFacts from "../components/Product/NutritionFacts";
import productImg from "../assets/images/mac-cheese.jpg";

export default function Product() {
  return (
    <>
      <header className="product-header">
        <img src={productImg} alt="" />
        <h2>BUTTERNUT SQUASH MAC & CHEESE</h2>
      </header>
      <div className="product-content">
        <p>
          Ultra creamy and delicious this Vegan Butternut Squash Mac & Cheese
          with smoky flavor is the BEST! With only 10 ingredients it's quick and
          comfort food! This is a delicious fall inspired mac and cheese made
          with butternut squash, cashews, nutritional yeast, smoked paprika and
          a few other everyday pantry staples.
        </p>
        <Ingredients />
        <NutritionFacts />
        <button className="primary-btn">Go Back</button>
      </div>
    </>
  );
}

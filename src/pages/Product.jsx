import NutritionFacts from "../components/NutritionFacts";
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
        <h3>Ingredients</h3>
        <ul>
          <li>Butternut Squash </li>
          <li>Pasta </li>
          <li>Cashews </li>
          <li>Garlic </li>
          <li>Dijon</li>
          <li>Nutritional Yeast</li>
          <li>Smoked Paprika</li>
          <li>Onion Powder</li>
          <li>Lemon</li>
          <li>Salt & Pepper </li>
        </ul>
        <h3>Nutrition Facts</h3>
        <NutritionFacts />
        <button className="primary-btn">Go Back</button>
      </div>
    </>
  );
}

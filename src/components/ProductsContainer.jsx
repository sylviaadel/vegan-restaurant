import category from "../Data/categories.json";

const productsItems = category.map((product) => (
  <section key={product.id}>
    <div>
      <img src={`images/${product.image}`} alt={product.alt} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
      </div>
    </div>
    <div className="clear"></div>
  </section>
));
export default function ProductsContainer() {
  return <div className="ProductsContainer">{productsItems}</div>;
}

import { Link } from "react-router-dom";

export default function ProductsContainer(props) {
  const products = props.category.products.map((product) => (
    <section key={product.id}>
      <div>
        <img src={`../images/products/${product.img}`} alt={product.alt} />
        <div>
          <h3>
            <Link to={`/${props.category.name}/${product.id}`}>
              {product.name}
            </Link>
          </h3>
          <p>{product.desc}</p>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  ));
  return <div className="ProductsContainer">{products}</div>;
}

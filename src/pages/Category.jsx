import categoryImg from "../assets/images/desserts-main-img.png";

export default function Category() {
  return (
    <header className="category-header">
      <img src={categoryImg} alt="categoryImg" />
      <h1>Our Wonderful Dishes</h1>
    </header>
  );
}

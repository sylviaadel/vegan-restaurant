import heroImg from "../../assets/images/hero-img.png";

export default function Hero() {
  return (
    <section className="Hero">
      <img
        src={heroImg}
        alt="A vegan dish of vegtables with the shape of heart"
      />
      <h1>Veganhuset</h1>
      <h3>
        Peace starts at our plate <br />
        Eat green, stay healthy
      </h3>
    </section>
  );
}

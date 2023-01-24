import heroImg from "../../assets/images/hero-img.png";

export default function Hero() {
  return (
    <section className="Hero">
      <img
        src={heroImg}
        alt="A vegan dish of vegtables with the shape of heart"
      />
      <h1>Veganhuset</h1>
      {/* Naming -1 this is a slogan not a H3. Use a p or span tag instead */}
      {/* H1, H2, H3, are reserved for real section titles, not just to make text look big */}
      {/* so p or span is the better tag for slogans */}
      <h3>
        Peace starts at our plate <br />
        Eat green, stay healthy
      </h3>
    </section>
  );
}

import Hero from "../components/Home/Hero";
import CategoriesContainer from "../components/Home/CategoriesContainer";

// why the home is 2 components? you can fit everything here...
// I don't hate the use of the <></> tag, but how do you target specific CSS styling that onyl affects the home page?
// if you dont use something like <div id="home"> or <div className="home"> ???
export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesContainer />
    </>
  );
}

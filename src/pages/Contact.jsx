import BookTable from "../components/BookTable";
import ChefImg from "../assets/images/chef-img.png";
import MapImg from "../assets/images/staticmap.png";

export default function Contact() {
  return (
    <>
      <header className="contact-header">
        <img
          src={ChefImg}
          alt="The chef holding a plate of vegtables in his kitchen."
        />
      </header>
      <section className="opening-times">
        <h3>Opening Times</h3>
        <ul>
          <li>Monday to Friday from 10:00 to 22:00</li>
          <li>Saturdays and Sundays from 10:00 to 20:00</li>
        </ul>
      </section>
      <section className="book-table">
        <BookTable />
      </section>
      <section className="address">
        <h3>Address</h3>
        <ul>
          <li>Brevik, Lidingö</li>
          <li>Stockholm, Sweden</li>
        </ul>
      </section>
      <section className="map">
        <img src={MapImg} alt="Main Map of Restaurant with marker." />
      </section>
    </>
  );
}

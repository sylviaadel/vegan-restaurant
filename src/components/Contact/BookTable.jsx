import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookTable() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="book-table">
      <h3>Book a table</h3>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <DatePicker
          className="day-field"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
        />
      </form>
    </section>
  );
}

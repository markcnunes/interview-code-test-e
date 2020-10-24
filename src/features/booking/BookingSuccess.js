import React from "react";

const BookingSuccess = ({ agenda, details }) => {
  const { start, end } = agenda.events.filter(
    (item) => item.title === "Your slot"
  )[0];

  return (
    <div className="form__message form__message__success">
      <h2>Your booking has been confirmed!</h2>
      <h4>Details:</h4>

      {Object.values(details).map((item, i) => {
        if (item.type === "people") {
          return (
            <div key={`${item.title}--${i}`}>
              <p>
                {item.title}: {item.value}
              </p>
            </div>
          );
        }
        return (
          <div key={`${item.title}--${i}`}>
            <p>{item.title}</p>
            <p>Price: £{item.value}</p>
            <p>Total: £{Number(item.price) * Number(item.value)}</p>
          </div>
        );
      })}
      <div className="form__message__date">
        <h4>Date:</h4>
        <p>Start: {start.toString()}</p>
        <p>End: {end.toString()}</p>
      </div>
    </div>
  );
};

export default BookingSuccess;

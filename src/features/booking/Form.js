import React, { useState } from "react";
import NumberField from "./NumberField";
import Agenda from "./Agenda";
import { rentalData } from "../../api/fakeAPI";
import { useDispatch, useSelector } from "react-redux";
import { saveBooking } from "../../redux/actions/bookingAction";
import BookingSuccess from "./BookingSuccess";

const Form = () => {
  const dispatch = useDispatch();
  const agenda = useSelector((state) => state.booking.agenda);
  const details = useSelector((state) => state.booking.details);
  const [error, setError] = useState(null);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [rental, setRental] = useState(rentalData[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    dispatch(saveBooking(rental));

    setSubmitMessage("Sumiting...");

    // Mock server delay waiting for confirmation
    setTimeout(() => {
      setSubmitMessage("Submited");
    }, 1500);
  };

  const numberFieldOnChange = ({ id, value }) => {
    setRental((prevState) => {
      prevState[id].value = value;
      return { ...prevState };
    });
  };

  return (
    <div className="form-rentals">
      {submitMessage === "Submited" ? (
        <BookingSuccess details={details} agenda={agenda} />
      ) : (
        <>
          {error && <p className="form__error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form__section">
              <NumberField
                id="adults"
                name={rental.adults.title}
                value={rental.adults.value}
                numberFieldOnChange={numberFieldOnChange}
                required={true}
              />
              <NumberField
                id="underAge"
                name={rental.underAge.title}
                value={rental.underAge.value}
                numberFieldOnChange={numberFieldOnChange}
                required={true}
              />
            </div>
            {Object.entries(rental)
              .filter(([key, value]) => value.type === "resource")
              .map(([key, value]) => {
                return (
                  <div className="form__section" key={key}>
                    <NumberField
                      id={key}
                      name={value.title}
                      value={value.value}
                      price={value.price}
                      type={value.type}
                      numberFieldOnChange={numberFieldOnChange}
                    />
                  </div>
                );
              })}
            {Object.values(rental).some(
              (value) => value.type === "resource" && value.value > 0
            ) ? (
              <Agenda />
            ) : (
              <p className="form__message">
                Please enter resources you want above
              </p>
            )}
            <button
              type="submit"
              className="button button--tertiary"
              disabled={
                !agenda.events.some(
                  (item) => item.title === "Your slot" && item.start !== null
                )
              }
            >
              Review and book
            </button>
          </form>
          {submitMessage === "Sumiting..." && (
            <div className="form__message form__message__submit">
              ...Submiting
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberField = ({
  id,
  value,
  name,
  price,
  type,
  required = false,
  numberFieldOnChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (event) => {
    numberFieldOnChange({ id, value: event.target.value });
  };

  const toCurrency = (number) => {
    const formatter = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      currency: "GBP",
    });

    return formatter.format(number);
  };

  const toggleEditing = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      <fieldset className="form__field">
        <label
          className={`form__label ${required ? "required" : null}`}
          htmlFor={name}
        >
          {name}
        </label>
        {isEditing ? (
          <input
            type="number"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={toggleEditing}
            required={required}
            className="form__input form__input--number"
            aria-label={name}
            min={0}
          />
        ) : (
          <input
            type="text"
            name={name}
            value={toCurrency(value)}
            onFocus={toggleEditing}
            className={`form__input form__input--number ${
              type === "resource" && value === "0" ? "hide" : null
            }`}
            readOnly
            aria-label={name}
          />
        )}
      </fieldset>
      {type === "resource" && (
        <fieldset className="form__field">
          <label className="form__label" htmlFor={`${id}--text`}>
            Price per 1 hour:
          </label>
          <input
            disabled
            id={`${id}--text`}
            className="form__input"
            type="text"
            value={price}
          ></input>
        </fieldset>
      )}
    </>
  );
};

NumberField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  numberFieldOnChange: PropTypes.func,
};

export default NumberField;

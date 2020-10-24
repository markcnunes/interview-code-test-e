import React from "react";
import NumberField from "../NumberField";
import expect from "expect";
import { render, screen } from "../../../testUtils";
import { rentalData } from "../../../api/fakeAPI";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const numberFieldOnChangehMock = jest.fn();

describe("<NumberField type='people'/>", () => {
  beforeEach(() => {
    render(
      <NumberField
        id={"1"}
        name={rentalData[0].adults.title}
        value={rentalData[0].adults.value}
        type={rentalData[0].adults.type}
        required={true}
        numberFieldOnChange={numberFieldOnChangehMock}
      />
    );
  });

  it("renders without crashing", () => {
    expect(screen).toMatchSnapshot();
  });

  it("renders field about people", () => {
    expect(
      screen.getByRole("textbox", { name: /Adults going/i })
    ).toBeInTheDocument();
  });
  it("sends values to parent", async () => {
    const input = screen.getByRole("textbox", { name: /Adults going/i });

    await userEvent.type(input, "1");
    expect(numberFieldOnChangehMock).toHaveBeenCalledWith({
      id: "1",
      value: "11",
    });
  });
});

describe("<NumberField type='resource'/>", () => {
  beforeEach(() => {
    render(
      <NumberField
        id={"1"}
        name={rentalData[0].rentalFirst.title}
        value={rentalData[0].rentalFirst.value}
        price={rentalData[0].rentalFirst.price}
        type={rentalData[0].rentalFirst.type}
        numberFieldOnChange={numberFieldOnChangehMock}
      />
    );
  });

  it("renders without crashing", () => {
    expect(screen).toMatchSnapshot();
  });

  it("renders field about rental", () => {
    expect(
      screen.getByRole("textbox", { name: /Canoes /i })
    ).toBeInTheDocument();
  });

  it("renders field about price per 1 hour:", () => {
    expect(
      screen.getByRole("textbox", { name: /Price per 1 hour:/i })
    ).toBeInTheDocument();
  });

  it("sends values to parent", async () => {
    const input = screen.getByRole("textbox", { name: /Canoes /i });

    await userEvent.type(input, "1");
    expect(numberFieldOnChangehMock).toHaveBeenCalledWith({
      id: "1",
      value: "01",
    });
  });
});

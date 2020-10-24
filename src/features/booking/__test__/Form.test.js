import React from "react";
import Form from "../Form";
import expect from "expect";
import { render, screen } from "../../../testUtils";
import { agendaData } from "../../../api/fakeAPI";

describe("<Form />", () => {
  beforeEach(() => {
    render(<Form />, {
      initialState: {
        booking: {
          agenda: agendaData,
        },
      },
    });
  });

  it("renders without crashing", () => {
    expect(screen).toMatchSnapshot();
  });

  it("renders field about adults going", () => {
    expect(
      screen.getByRole("textbox", { name: /Adults going/i })
    ).toBeInTheDocument();
  });

  it("renders field about under 16s going", () => {
    expect(
      screen.getByRole("textbox", { name: /Under 16s going/i })
    ).toBeInTheDocument();
  });

  it("renders field about under 16s going", () => {
    expect(
      screen.getByRole("textbox", { name: /Under 16s going/i })
    ).toBeInTheDocument();
  });

  it("renders submit button", () => {
    expect(
      screen.getByRole("button", { name: /Review and book/i })
    ).toBeInTheDocument();
  });
});

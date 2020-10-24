import React from "react";
import Main from "../Main";
import expect from "expect";
import { render, screen } from "../../testUtils";
import { agendaData } from "../../api/fakeAPI";

describe("<Main />", () => {
  beforeEach(() => {
    render(<Main />, {
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

  it("renders h1", () => {
    expect(
      screen.getByRole("heading", { name: /Cras facilisis finibus massa/i })
    ).toBeInTheDocument();
  });
});

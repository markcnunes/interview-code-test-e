import React from "react";
import Page from "../Page";
import expect from "expect";
import { render, screen } from "../../testUtils";
import { agendaData } from "../../api/fakeAPI";

describe("<Page />", () => {
  beforeEach(() => {
    render(<Page />, {
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

  it("renders hero", () => {
    expect(
      screen.getByRole("banner", { name: /Hero Image/i })
    ).toBeInTheDocument();
  });
});

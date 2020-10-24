import React from "react";
import App from "../App";
import expect from "expect";
import { render, screen } from "../../testUtils";
import { agendaData } from "../../api/fakeAPI";

describe("<App />", () => {
  it("renders it with initialState", () => {
    render(<App />, {
      initialState: {
        booking: {
          agenda: agendaData,
        },
      },
    });

    expect(screen).toMatchSnapshot();
  });
});

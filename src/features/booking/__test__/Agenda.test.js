import React from "react";
import Agenda from "../Agenda";
import expect from "expect";
import { render, screen } from "../../../testUtils";
import { agendaData } from "../../../api/fakeAPI";

describe("<Agenda />", () => {
  beforeEach(() => {
    render(<Agenda />, {
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

  it("renders button: today", () => {
    expect(screen.getByRole("button", { name: /Today/i })).toBeInTheDocument();
  });

  it("renders button: today", () => {
    expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument();
  });

  it("renders button: today", () => {
    expect(screen.getByRole("button", { name: /Next/i })).toBeInTheDocument();
  });
});

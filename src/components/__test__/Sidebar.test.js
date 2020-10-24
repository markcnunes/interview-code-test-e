import React from "react";
import Sidebar from "../Sidebar";
import expect from "expect";
import { render, screen } from "../../testUtils";
import { agendaData } from "../../api/fakeAPI";

describe("<Sidebar />", () => {
  beforeEach(() => {
    render(<Sidebar />, {
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

  it("renders sidebar", () => {
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });
});

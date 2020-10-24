import React from "react";
import Header from "../Header";
import expect from "expect";
import { render, screen } from "../../testUtils";

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />);
  });
  it("renders without crashing", () => {
    expect(screen).toMatchSnapshot();
  });

  it("renders logo", () => {
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
  });
});

import React from "react";
import Footer from "../Footer";
import expect from "expect";
import { render, screen } from "../../testUtils";

describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("renders without crashing", () => {
    expect(screen).toMatchSnapshot();
  });

  it("renders logo", () => {
    expect(screen.getByText(/Made by Mark/i)).toBeInTheDocument();
  });
});

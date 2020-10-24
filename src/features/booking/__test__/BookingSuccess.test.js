import React from "react";
import BookingSuccess from "../BookingSuccess";
import expect from "expect";
import { render, screen } from "../../../testUtils";
import { agendaData, rentalData } from "../../../api/fakeAPI";

const today = new Date();
agendaData.events[2].start = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  13
);
agendaData.events[2].end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  14
);

describe("<BookingSuccess />", () => {
  beforeEach(() => {
    render(<BookingSuccess agenda={agendaData} details={rentalData} />);
  });

  it("renders without crashing", () => {
    expect(screen).toMatchSnapshot();
  });
});

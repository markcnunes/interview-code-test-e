import { agendaData, rentalData } from "../../../api/fakeAPI";
import { bookingReducer } from "../bookingReducer";
const initialState = { agenda: agendaData };

describe("Booking reducer", () => {
  it("should return the initial state", () => {
    expect(bookingReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SAVE_AGENDA", () => {
    expect(
      bookingReducer(initialState, {
        type: "SAVE_AGENDA",
        payload: {
          title: "Your slot",
          start: "Time",
          end: "Time",
        },
      })
    ).toMatchObject({
      agenda: {
        events: [
          { end: /2020/i, start: /2020/i, title: "Not available" },
          { end: /2020/i, start: /2020/i, title: "Not available" },
          { end: "Time", start: "Time", title: "Your slot" },
        ],
      },
    });
  });

  it("should handle SAVE_BOOKING", () => {
    expect(
      bookingReducer(initialState, {
        type: "SAVE_BOOKING",
        payload: rentalData[0],
      })
    ).toMatchObject({
      details: rentalData[0],
    });
  });
});

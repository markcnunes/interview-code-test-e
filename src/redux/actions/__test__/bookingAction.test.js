import { rentalData } from "../../../api/fakeAPI";
import { saveAgenda, saveBooking } from "../bookingAction";

describe("Actions", () => {
  it("should save agenda", () => {
    const payload = {
      title: "Your slot",
      start: "Time",
      end: "Time",
    };
    const expectedAction = {
      type: "SAVE_AGENDA",
      payload,
    };
    expect(saveAgenda(payload)).toEqual(expectedAction);
  });

  it("should save booking", () => {
    const payload = rentalData[0];
    const expectedAction = {
      type: "SAVE_BOOKING",
      payload,
    };
    expect(saveBooking(payload)).toEqual(expectedAction);
  });
});

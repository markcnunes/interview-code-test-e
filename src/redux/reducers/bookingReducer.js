import { agendaData } from "../../api/fakeAPI";

const initialState = { agenda: agendaData };

export const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_AGENDA":
      return {
        ...state,
        agenda: {
          events: state.agenda.events.map((item) => {
            if (item.title === "Your slot") {
              item.start = payload.start;
              item.end = payload.end;
            }
            return item;
          }),
        },
      };
    case "SAVE_BOOKING":
      return { ...state, details: payload };

    default:
      return state;
  }
};

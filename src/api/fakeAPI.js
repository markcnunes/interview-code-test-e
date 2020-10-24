const today = new Date();

export const agendaData = {
  events: [
    {
      start: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        11
      ),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12),
      title: "Not available",
    },
    {
      start: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        15
      ),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16),
      title: "Not available",
    },
    {
      start: null,
      end: null,
      title: "Your slot",
      // start: moment().toDate(),
      // end: moment().add(1, "hours").toDate(),
      //   title: "Some title",
    },
  ],
};

export const rentalData = [
  {
    adults: {
      type: "people",
      title: "Adults going",
      value: "1",
    },
    underAge: {
      type: "people",
      title: "Under 16s going",
      value: "0",
    },
    rentalFirst: {
      type: "resource",
      title: "Canoes (2 people)",
      value: "0",
      price: "18.99",
    },
    rentalSecond: {
      type: "resource",
      title: "Double Sit On Top Kayaks",
      value: "0",
      price: "18.99",
    },
    rentalThird: {
      type: "resource",
      title: "Double Sit On Top Kayaks",
      value: "0",
      price: "49.99",
    },
    rentalFourth: {
      type: "resource",
      title: "Single Sit On Top Kayaks (1 person)",
      value: "0",
      price: "12.99",
    },
  },
];

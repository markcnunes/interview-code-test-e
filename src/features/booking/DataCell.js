import React from "react";

const DateCell = ({ range, value, children }) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return <div className={value < now ? "date-in-past" : ""}>{children}</div>;
};

export default DateCell;

import React from "react";

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "rgba(153,204,255,.7)",
    },
  });

export default ColoredDateCellWrapper;

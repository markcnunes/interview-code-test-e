const eventStyleGetter = (event, start, end, isSelected) => {
  const styleNotavailable = {
    backgroundColor: "#ee6f57",
    borderRadius: "0px",
    opacity: 0.8,
    color: "black",
    border: "0px",
    display: "block",
  };
  const styleDefault = {
    backgroundColor: "#7579e7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "black",
    border: "0px",
    display: "block",
  };

  // Not available
  if (event.title === "Not available") {
    return {
      style: styleNotavailable,
    };
  }
  // Default
  return {
    style: styleDefault,
  };
};

export default eventStyleGetter;

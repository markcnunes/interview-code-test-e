import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import ColoredDateCellWrapper from "./ColoredDateCellWrapper";
import DateCell from "./DataCell";
import { saveAgenda } from "../../redux/actions/bookingAction";

// Styles
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import eventStyleGetter from "./eventStyleGetter";

// Set-up
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const Agenda = () => {
  const today = new Date();
  const dispatch = useDispatch();
  const agenda = useSelector((state) => state.booking.agenda);

  const slotsNotAvailable = agenda.events.filter(
    (item) => item.title === "Not available"
  );

  const handleNewSlot = ({ event, action, start, end }) => {
    // Allow minutes flexibility on resize
    if (action === "select" || (event && event.title !== "Not available")) {
      checkTimeSlot({ start, end });
    }

    // Add slot of 1 hour on click
    if (action === "click") {
      checkTimeSlot({ start, end: moment(start).add(1, "hours").toDate() });
    }
  };

  const checkTimeSlot = (newtimeSlot) => {
    let newStartSlot,
      newEndSlot,
      fallsInBetween = false;

    slotsNotAvailable.forEach((slotNotAvailable) => {
      // Fix start of new slot to don't overlap another slot
      if (
        newtimeSlot.start >= slotNotAvailable.start &&
        newtimeSlot.start <= slotNotAvailable.end
      ) {
        newStartSlot = moment(newtimeSlot.start)
          .subtract(
            (newtimeSlot.start.valueOf() - slotNotAvailable.end.valueOf()) /
              1000 /
              60 /
              60,
            "hours"
          )
          .toDate();
      }
      // Fix end of new slot to don't overlap another slot
      if (
        newtimeSlot.start <= slotNotAvailable.start &&
        newtimeSlot.end >= slotNotAvailable.start
      ) {
        newEndSlot = moment(newtimeSlot.end)
          .subtract(
            (newtimeSlot.end.valueOf() - slotNotAvailable.start.valueOf()) /
              1000 /
              60 /
              60,
            "hours"
          )
          .toDate();
      }
      // Falls in between
      if (
        (newtimeSlot.start >= slotNotAvailable.start &&
          newtimeSlot.end <= slotNotAvailable.end) ||
        (newtimeSlot.start <= slotNotAvailable.start &&
          newtimeSlot.end >= slotNotAvailable.end)
      ) {
        fallsInBetween = true;
      }
    });
    if (newStartSlot) {
      return updateSlot({ start: newStartSlot, end: newtimeSlot.end });
    } else if (newEndSlot) {
      return updateSlot({ start: newtimeSlot.start, end: newEndSlot });
    } else if (fallsInBetween) {
      /* 
        It won't let the user create a new event in between another slot.
        It throws a message in the console but could also be inplemented to notify
        the user if necessary.
      */
      console.log("error");
      return;
    } else {
      updateSlot({ start: newtimeSlot.start, end: newtimeSlot.end });
    }
  };

  const updateSlot = ({ start, end }) => {
    const selectedEvent = agenda.events.filter(
      (item) => item.title === "Your slot"
    );

    selectedEvent.start = start;
    selectedEvent.end = end;

    dispatch(saveAgenda(selectedEvent));
  };

  return (
    <div className="time">
      <DnDCalendar
        min={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11)
        }
        max={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16)
        }
        defaultDate={moment().toDate()}
        timeslots={60}
        step={1}
        defaultView="day"
        events={agenda.events}
        localizer={localizer}
        onEventDrop={handleNewSlot}
        onEventResize={handleNewSlot}
        onSelectSlot={handleNewSlot}
        components={{
          dateCellWrapper: DateCell,
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
        selectable
        resizable
        style={{ height: "100vh" }}
        views={{
          day: true,
        }}
        titleAccessor="title"
        tooltipAccessor="title"
        startAccessor={(event) => moment(event.start).toDate()}
        endAccessor={(event) => moment(event.end).toDate()}
        eventPropGetter={eventStyleGetter}
        resourceAccessor="resourceId"
        resourceIdAccessor="id"
        resourceTitleAccessor="title"
        scrollToTime={moment().toDate()}
        dayLayoutAlgorithm="no-overlap"
      />
    </div>
  );
};

export default Agenda;

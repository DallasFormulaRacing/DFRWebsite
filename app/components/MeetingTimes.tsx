"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the time grid plugin
import rrulePlugin from "@fullcalendar/rrule"; // Import the rrule plugin

export default function Calendar({ events }: { events: any }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      
      <div className="bg-white shadow-md rounded-lg p-4 w-full overflow-x-scroll relative">
        <div className="relative w-[1200px] md:w-full">
          <FullCalendar
            eventMinWidth={400}
            dayHeaderFormat={{ weekday: "long" }}
            plugins={[dayGridPlugin, timeGridPlugin, rrulePlugin]}
            initialView="timeGridWeek" // Use time grid for weekly view with time slots
            firstDay={0} // Start the week on Sunday
            weekends={false} // Show both Saturday and Sunday
            slotMinTime="12:00:00" // Earliest time displayed
            slotMaxTime="21:00:00" // Latest time displayed
            expandRows
            slotLabelInterval={"00:30:00"}
            nowIndicator
            dayHeaderClassNames={"text-lg"}
            allDayClassNames={"text-lg"}
            slotLabelClassNames={"text-lg padding-24 w-96"}
            events={events}
            headerToolbar={{
              start: "",
              end: "",
            }}
            eventContent={(eventInfo) => (
              <div>
                <p className="text-[0.9rem] font-bold">
                  {eventInfo.event.title} @ {eventInfo.timeText}
                </p>
              </div>
            )}
            allDaySlot={false}
            stickyFooterScrollbar={true}
            stickyHeaderDates
            slotEventOverlap={false}
            height={"60rem"}
          />
        </div>
      </div>

      {/* <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <h2 className="text-xl font-bold mb-3">TBD</h2>
        <ul className="space-y-2">
          <li className="rounded-md border border-gray-200 px-4 py-2 text-[0.9rem]">
            <span className="font-bold">Meeting</span>
            <span className="text-gray-500"> — time to be determined</span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
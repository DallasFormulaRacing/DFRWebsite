"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the time grid plugin
import rrulePlugin from "@fullcalendar/rrule"; // Import the rrule plugin
import { EventClickArg } from "@fullcalendar/core";

type SelectedMeeting = { title: string; start: Date; end: Date; url?: string };



// Formats a Date the way calendar apps expect: 20250101T180000Z
const toCalDate = (d: Date) =>
  d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

// Escapes special characters so titles don't break the .ics file
const escapeIcs = (s: string) =>
  s
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");

const googleCalendarUrl = (m: SelectedMeeting) =>
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent(m.title)}` +
  `&dates=${toCalDate(m.start)}/${toCalDate(m.end)}`;

const downloadIcs = (m: SelectedMeeting) => {
  const slug = m.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Meetings//EN",
    "BEGIN:VEVENT",
    `UID:${toCalDate(m.start)}-${slug}@meetings`,
    `DTSTAMP:${toCalDate(new Date())}`,
    `DTSTART:${toCalDate(m.start)}`,
    `DTEND:${toCalDate(m.end)}`,
    `SUMMARY:${escapeIcs(m.title)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${slug}.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

export default function Calendar({ events }: { events: any }) {
  const [selected, setSelected] = useState<SelectedMeeting | null>(null);

  // Move each event's url into extendedProps so FullCalendar can't navigate on its own
  const calendarEvents = Array.isArray(events)
    ? events.map(({ url, ...rest }: any) => ({
        ...rest,
        extendedProps: { ...rest.extendedProps, url },
      }))
    : events;

  const handleEventClick = (info: EventClickArg) => {
    info.jsEvent.preventDefault(); // stops FullCalendar from navigating to the event's url
    
    const start = info.event.start;
    if (!start) return;
    setSelected({
      title: info.event.title,
      start,
      // If an event has no end time, default to a 1 hour meeting
      end: info.event.end ?? new Date(start.getTime() + 60 * 60 * 1000),
      url: info.event.extendedProps.url,
    });
  };

  const timeFmt: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
  };

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
            events={calendarEvents}
            eventClick={handleEventClick}
            eventClassNames={"cursor-pointer"}
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
            <span className="font-bold">Meeting Name</span>
            <span className="text-gray-500"> — time to be determined</span>
          </li>
        </ul>
      </div> */}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold">{selected.title}</h3>
            <p className="text-gray-600 mb-4">
              {selected.start.toLocaleDateString(undefined, {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
              {" · "}
              {selected.start.toLocaleTimeString([], timeFmt)} –{" "}
              {selected.end.toLocaleTimeString([], timeFmt)}
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={googleCalendarUrl(selected)}
                target="_blank"
                rel="noopener noreferrer"
                className= " text-center rounded-[6px] border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-50"
              >
                Add to Google Calendar
              </a>
              <button
                onClick={() => downloadIcs(selected)}
                className="rounded-[6px] border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-50"
              >
                Download .ics (Apple / Outlook)
              </button>
              {selected.url && (
                <a
                  href={selected.url}
                  className="rounded-[6px] border border-gray-300 px-4 py-2 text-center font-semibold hover:bg-gray-50"
                >
                  View meeting page
                </a>
              )}
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
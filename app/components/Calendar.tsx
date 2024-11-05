"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the time grid plugin
import rrulePlugin from "@fullcalendar/rrule"; // Import the rrule plugin
import { CalendarApi, EventContentArg } from "@fullcalendar/core";

export default function Calendar() {
    return (
        <div className="bg-white shadow-md max-h-[1000px] rounded-lg p-4 w-full">
            <FullCalendar
                dayHeaderContent={(date) => {
                    return (
                        <h1>
                            {
                                {
                                    0: "Sunday",
                                    1: "Monday",
                                    2: "Tuesday",
                                    3: "Wednesday",
                                    4: "Thursday",
                                    5: "Friday",
                                    6: "Saturday",
                                }[date.date.getDay()]
                            }
                        </h1>
                    );
                }}
                viewClassNames={"max-h-[900px]"}
                plugins={[dayGridPlugin, timeGridPlugin, rrulePlugin]}
                initialView="timeGridWeek" // Use time grid for weekly view with time slots
                firstDay={0} // Start the week on Sunday
                weekends={true} // Show both Saturday and Sunday
                slotMinTime="08:00:00" // Earliest time displayed
                slotMaxTime="23:00:00" // Latest time displayed
                nowIndicator
                visibleRange={(currentDate) => {
                    let start = currentDate.clone().startOf("week"); // Start on Sunday
                    let end = start.clone().add(6, "days"); // End on Saturday
                    return { start: start, end: end };
                }}
                dayHeaderClassNames={"text-xl"}
                allDayClassNames={"text-lg"}
                slotLabelClassNames={"text-lg"}
                events={[
                    {
                        title: "Weekly Meeting",
                        rrule: {
                            freq: "weekly",
                            byweekday: ["mo"], // Every Monday
                            dtstart: "2024-10-01T10:00:00", // Start date and time
                            until: "2025-12-31", // Optional: End date for recurrence
                        },
                        extendedProps: { tags: ["Meeting", "Work"] },
                    },
                    {
                        title: "Weekly Workshop",
                        rrule: {
                            freq: "weekly",
                            byweekday: ["we"], // Every Wednesday
                            dtstart: "2024-10-02T14:00:00", // Start date and time
                            until: "2025-12-31",
                        },
                        extendedProps: { tags: ["Workshop", "Learning"] },
                    },
                ]}
                headerToolbar={{
                    start: "",
                    end: "",
                }}
            />
        </div>
    );
}

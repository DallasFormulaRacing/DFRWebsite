import EventsArchive from "@/data/Events.json";
import UTDSAELogo from "@/public/dfr-sae.png";
import Image from "next/image";
import Link from "next/link";
import MeetingTime from "@/components/MeetingTimes";
import Calendar from '../Calendar';
import { url } from "inspector";

export default function MeetingTimes() {
  return (
    <div className="w-full pb-8">
      <section className="px-8 md:px-24 py-10">
        <h1 className="text-6xl font-extrabold text-accent-orange mb-20">
          Meeting Times 
        </h1>
        <div className="flex justify-center">
          <MeetingTime
            events={[
              {
                title: "IC Embedded Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/embedded",
              },
              {
                title: "Manufacturing Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/manufacturing",
              },
              {
                title: "Website Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T13:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: "",
              },
              {
                title: "Events and logistics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T13:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: "/team/ic/Eventsandlogistics",
              },
              {
                title: "Marketing Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T16:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/Marketing",
              },
              {
                title: "IC Aerodynamics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T16:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/aerodynamics",
              },
              {
                title: "EV Powertrain Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: "/team/ev/powertrain",
              },
              {
                title: "EV Packaging Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: " /team/ev/packaging",
              },   
              {
                title: "Ergonomics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/ergonomics",
              },
              {
                title: "IC Suspension Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["we"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/suspension",
              },
              {
                title: "Business Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["we"], // Every Monday
                  dtstart: "2024-10-01T16:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/business",
              },

              {
                title: "Website Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: "",
              },
              {
                title: "IC Powertrain Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/powertrain",
              },
              {
                title: "Marketing Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T20:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/Marketing",
              },
              {
                title: "IC Electrical Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["su"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/electrical",
              },
              {
                title: "Composites Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/composites",
              },
              {
                title: "IC Software Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/software",
              },

              {
                title: "Business Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T14:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/business",
              },
              {
                title: "EV General Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["we"], // Every Monday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                //url: " /team/ic/chassis",
              },
              {
                title: "EV Accumulator ",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: "/team/ev/Accumulator",  
              },
              {
                title: "EV Electrical ",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: " /team/ev/electrical",

              },
              {
                title: "EV Embedded",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T16:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: " /team/ev/embedded",
              },
              {
                title: "Aero",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T18:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: " /team/ev/embedded",
              },
              {
                title: "F1 Tenth",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: "/team/ic/F1Tenth",
              },           
              // {
              //   title: "DFR Potluck",
              //   rrule: {
              //     freq: "YEARLY",
              //     byweekday: ["fr"], // Every Monday
              //     dtstart: "2024-11-08T18:00:00", // Start date and time
              //     until: "2024-11-09", // Optional: End date for recurrence
              //   },
              //   location: "DFR Shop",
              //   extendedProps: { tags: ["Meeting", "Work"] },
              //   backgroundColor: "#EDCA2C",
              //   textColor: "#0F0F0F",
              // },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

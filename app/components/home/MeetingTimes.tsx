import EventsArchive from "@/data/Events.json";
import UTDSAELogo from "@/public/dfr-sae.png";
import Image from "next/image";
import Link from "next/link";
import MeetingTime from "@/components/MeetingTimes";

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
              },
              {
                title: "Manufacturing Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
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
              },
              {
                title: "Ergonomics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Monday
                  dtstart: "2024-10-01T19:15:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
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
              },
              {
                title: "Composites Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["we"], // Every Monday
                  dtstart: "2024-10-01T19:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
              },
              {
                title: "Business Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T16:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
              },
              {
                title: "IC Software Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
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
              },
              {
                title: "IC Electrical Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T19:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
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
              },
              {
                title: "Marketing Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T14:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
              },
              {
                title: "IC Chassis Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
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
              },
              {
                title: "EV Electrical Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["we"], // Every Monday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
              },
              {
                title: "EV Thermals Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
              },
              {
                title: "EV Packaging Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Monday
                  dtstart: "2024-10-01T18:30:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
              },
              {
                title: "EV Embedded Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T16:45:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
              },
              {
                title: "EV Powertrain Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2025-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
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

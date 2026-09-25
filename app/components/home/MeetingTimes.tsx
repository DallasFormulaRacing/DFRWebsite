import EventsArchive from "@/data/Events.json";
import UTDSAELogo from "@/public/dfr-sae.png";
import Image from "next/image";
import Link from "next/link";
import MeetingTime from "@/app/components/MeetingTimes";
import Calendar from '../../components/Calendar';
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
                title: "Manufacturing Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/manufacturing",
              },
              {
                title: "Website Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Thursday
                  dtstart: "2024-10-01T16:30:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: "/team/ic/website",
              },
              {
                title: "Events and logistics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T16:30:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: "/team/Admin/Eventsandlogistics",
              },
              {
                title: "Events and logistics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Tuesday
                  dtstart: "2024-10-01T16:15:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: "/team/Admin/Eventsandlogistics",
              },
              {
                title: "Business Meeting",
                rrule: {
                  freq: "weekly",//slide says TBA; did not change
                  byweekday: ["Mo"], // Every Monday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/Admin/Marketing",
              },   
              {
                title: "Business Meeting",
                rrule: {
                  freq: "weekly",//slide says TBA; did not change
                  byweekday: ["We"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/Admin/Marketing",
              },   
              {
                title: "Ergonomics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["Mo"], // Every Monday
                  dtstart: "2024-10-01T18:30:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/ergonomics",
              },
              {
                title: "IC Suspension Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Thursday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/suspension",
              },
              {
                title: "IC Powertrain Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/powertrain",
              },
              {
                title: "Marketing and Media Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Friday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/Admin/Marketing",
              },
              {
                title: "IC Electrical Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/electrical",
              },
              {
                title: "Composites Meeting",
                rrule: {
                  freq: "weekly", //meeting time on slide
                  byweekday: ["fr"], // Every Friday 
                  dtstart: "2024-10-01T12:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/composites",
              },
              {
                title: "Composites Meeting",
                rrule: {
                  freq: "weekly", //workshop time on slide
                  byweekday: ["fr"], // Every Friday
                  dtstart: "2024-10-01T13:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#045295",
                url: " /team/ic/composites",
              },
              {
                title: "IC Software Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["th"], // Every Thursday
                  dtstart: "2024-10-01T19:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/software",
              },
              {
                title: "EV Battery ",
                rrule: {
                  freq: "weekly",
                  byweekday: ["tu"], // Every Tuesday
                  dtstart: "2024-10-01T17:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: "/team/ev/Accumulator",  
              },
              {
                title: "EV Electrical ",
                rrule: {
                  freq: "weekly",
                  byweekday: ["mo"], // Every Monday
                  dtstart: "2024-10-01T17:30:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: " /team/ev/electrical",

              },
              {
                title: "Aerodynamics Meeting",
                rrule: {
                  freq: "weekly",
                  byweekday: ["we"], // Every Wednesday
                  dtstart: "2024-10-01T18:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#E87500",
                url: " /team/ic/aerodynamics",
              },
              {
                title: "F1 Tenth",
                rrule: {
                  freq: "weekly",
                  byweekday: ["fr"], // Every Friday
                  dtstart: "2024-10-01T16:00:00", // Start date and time
                  until: "2027-12-31", // Optional: End date for recurrence
                },
                extendedProps: { tags: ["Meeting", "Work"] },
                backgroundColor: "#2D8B49",
                url: "/team/ic/F1Tenth",
              } 
            ]}
          />
        </div>
      </section>
    </div>
  );
}
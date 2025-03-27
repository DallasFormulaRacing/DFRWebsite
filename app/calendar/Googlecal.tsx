import React from "react";

const GoogleCalendarEmbed: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=dallasformularacing%40gmail.com&ctz=America%2FNew_York"
        style={{ border: 0 }}
        className="w-full h-full"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default GoogleCalendarEmbed;

import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";

const OFFICERS = {
  leadership: [
    {
      bigTitle: "Events and Logistics",
      image: "/assets/team/Spring2025Officers/AnanyaUppalapati.png",
      name: "Ananya Uppalapati",
      role: "Events and Logistics Director",
      quote:
        "Events and Logistics is the backbone of team operations, handling everything from planning team events to coordinating outreach and competitions. We ensure every event runs smoothly through careful preparation, logistical support, and collaboration with all sub-teams.",
    },
  ],
  sponsorship: [
    {
      bigTitle: "Events and Logistics",
      image: "/assets/team/Spring2025Officers/AnastasiaGarel.png",
      name: "Anastasia Garel",
      role: "Events and Logistics Director",
      quote:
        "Events and Logistics form the foundation of team operations, managing everything from event planning to coordinating outreach and competitions. Through meticulous preparation, logistical support, and collaboration with all sub-teams, we ensure every event runs seamlessly.",
    },
  ],
  community: [
    {
      bigTitle: "Events and Logistics",
      image: "/assets/team/Spring2025Officers/LexusDouangdara.png",
      name: "Lexus Douangdara",
      role: "Events and Logistics Director",
      quote:
        "The Events and Logistics team is the core of operations, managing everything from event planning to coordinating outreach and competitions. Through careful preparation, logistical support, and collaboration with all sub-teams, we ensure every event is executed seamlessly.",
    },
  ],
};

export default function Page() {
  return (
    <main>
      <div className="hidden md:flex md:flex-row gap-4 p-0 sm:p-16">
        <div className="w-1/3 relative">
          <Image
            src={OFFICERS.leadership[0].image}
            alt="Business Director"
            fill={true}
            className="rounded-lg object-contain w-full md:ml-36 lg:ml-48"
          />
        </div>
        <div className="w-2/3">
          <OfficerSection
            bigTitle={OFFICERS.leadership[0].bigTitle}
            name={OFFICERS.leadership[0].name}
            role={OFFICERS.leadership[0].role}
            quote={OFFICERS.leadership[0].quote}
          />
        </div>
      </div>
      <TitleSection
        image="/assets/events/event1.jpg"
        title="Community"
        subtitle="Engage with our local community through initiatives, events and more"
        position="BottomRight"
      />
      <OfficerSection
        image={OFFICERS.sponsorship[0].image}
        name={OFFICERS.sponsorship[0].name}
        role={OFFICERS.sponsorship[0].role}
        quote={OFFICERS.sponsorship[0].quote}
      />
      <TitleSection
        image="/assets/events/event2.jpg"
        title=""
        subtitle=""
        position="BottomRight"
      />
      <OfficerSection
        image={OFFICERS.community[0].image}
        name={OFFICERS.community[0].name}
        role={OFFICERS.community[0].role}
        quote={OFFICERS.community[0].quote}
      />
      <TitleSection
        image="/assets/events/event3.jpg"
        title=""
        subtitle=""
        position="BottomRight"
      />
      <div className="md:hidden">
        <OfficerSection
          bigTitle={OFFICERS.leadership[0].bigTitle}
          image={OFFICERS.leadership[0].image}
          name={OFFICERS.leadership[0].name}
          role={OFFICERS.leadership[0].role}
          quote={OFFICERS.leadership[0].quote}
        />
      </div>
    </main>
  );
}

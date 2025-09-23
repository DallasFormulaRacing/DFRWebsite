import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";

const OFFICERS = {
  leadership: [
    {
      bigTitle: "F1 Tenth",
      image: "/assets/team/Spring2025Officers/Rovin.png",
      name: "Rovin Raj",
      role: "F1 Tenth Lead",
      quote:"Building an automated car is not just about engineering; it's about pushing the boundaries of innovation and teamwork. As a leader of F1 Tenth, I have the privilege to guide a passionate group of individuals who are redefining the future of transportation with every line of code.",
    },
  ],
  sponsorship: [
    
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
        image= "/gallery/24comp2.jpg"
        title=""
        subtitle=""
        position="BottomRight"
      />
            <OfficerSection
              image={OFFICERS.sponsorship[0].image}
              name={OFFICERS.sponsorship[0].name}
              role={OFFICERS.sponsorship[0].role}
              quote={OFFICERS.sponsorship[0].quote}
            />
      <TitleSection
        image= "/gallery/24compteam.jpg"
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

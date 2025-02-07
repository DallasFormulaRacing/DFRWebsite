import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";
import DennisYermakov from "@/public/assets/team/Headshots/DennisYermakov.png";
import NabeelSalman from "@/public/assets/team/Headshots/NabeelSalman.png";
import PrestonWolfe from "@/public/assets/team/Headshots/PrestonWolfe.png";
import AryanSharma from "@/public/assets/team/Headshots/Aryan Sharma.png";
import SponsorshipImage from "@/public/assets/team/20220818_183355 1.png";
import CommunityImage from "@/public/assets/team/IMG_3380 1.png";
import OutreachImage from "@/public/assets/team/IMG_3239 1.png";

const OFFICERS = {
  leadership: [
    {
      bigTitle: "Business",
      image: DennisYermakov,
      name: "Dennis Yermakov",
      role: "Business Director",
      quote:
        "With all the design work and manufacturing that the engineering teams do for this formula-style car, naturally, the budgeting and costs for the vehicle tend to be one of the main limiting handicaps of the team. From working on company research to writing proposals for relatively large sums of money, this position has allowed me to talk to some incredible people and help the team accomplish goals and increase the scope of their operations. I hope that by being on the Corporate Relations team, members will be able to make lasting financial impacts on the team and get a chance to network with unique sponsors for the team.",
    },
  ],
  sponsorship: [
    {
      image: "/assets/team/Spring2025Officers/NabeelSalman.png",
      name: "Nabeel Salman",
      role: "SAE Development Director",
      quote:
        "The corporate relations team is responsible for securing funding for the team through sponsorships, partnerships, and other forms of financial support. We also work to promote the team and its partners to a broader audience and manage the team's relationships with its partners and sponsors to ensure that expectations are met and any issues are addressed. These efforts help to ensure the financial stability and success of the team. As a member of this team, you will get an understanding of how economic and social aspects affect each of the engineering subsystems. Personally, I have gained valuable experience as a public speaker and in the engineering field within this organization.",
    },
  ],
  community: [
    {
<<<<<<< Updated upstream
      image: PrestonWolfe,
      name: "Preston Wolfe",
      role: "Social Media",
=======
      image: "/assets/team/Spring2025Officers/AnushKambala.png",
      name: "Anush Kambala",
      role: "Corporate Relations Director",
>>>>>>> Stashed changes
      quote:
        "Being a part of this team has introduced me to a whole new world of UT Dallas. Taking a part in the leadership has presented opportunities for myself to grow professionally in my field of user experience and learn more about the engineering field.",
    },
  ],
  outreach: [
    {
      image: AryanSharma,
      name: "Aryan Sharma",
      role: "Events Coordinator",
      quote:
        "This club is a perfect place to meet and forage new friends with similar passions and dedication to motorsport. I can not begin to list all the amazing and inspirational people I have met in and outside the team.",
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

      <div className="md:hidden">
        <OfficerSection
          bigTitle={OFFICERS.leadership[0].bigTitle}
          image={OFFICERS.leadership[0].image}
          name={OFFICERS.leadership[0].name}
          role={OFFICERS.leadership[0].role}
          quote={OFFICERS.leadership[0].quote}
        />
      </div>

      <TitleSection
        image={SponsorshipImage}
        title="Sponsorship"
        subtitle="Build and develop relations with leaders in engineering and business to expand our knowledge and resources"
        position="BottomLeft"
      />
      <OfficerSection
        image={OFFICERS.sponsorship[0].image}
        name={OFFICERS.sponsorship[0].name}
        role={OFFICERS.sponsorship[0].role}
        quote={OFFICERS.sponsorship[0].quote}
      />
      <TitleSection
        image={CommunityImage}
        title="Community"
        subtitle="Engage with our local community through initiatives, events and more"
        position="BottomRight"
      />
      <OfficerSection
        image={OFFICERS.community[0].image}
        name={OFFICERS.community[0].name}
        role={OFFICERS.community[0].role}
        quote={OFFICERS.community[0].quote}
      />
      <TitleSection
        image={OutreachImage}
        title="Outreach"
        subtitle="Encourage aspiring and future engineers to follow their passions"
        position="BottomLeft"
      />
      <OfficerSection
        image={OFFICERS.outreach[0].image}
        name={OFFICERS.outreach[0].name}
        role={OFFICERS.outreach[0].role}
        quote={OFFICERS.outreach[0].quote}
      />
    </main>
  );
}

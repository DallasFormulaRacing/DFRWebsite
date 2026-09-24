import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";
import NabeelSalman from "@/public/assets/team/Headshots/NabeelSalman.png";
import SponsorshipImage from "@/public/assets/team/20220818_183355 1.png";
import CommunityImage from "@/public/assets/team/IMG_3380 1.png";
import OutreachImage from "@/public/assets/team/IMG_3239 1.png";
import DFRWheelImage from "@/public/dfr-logo-tyre.png"
import Anvi from "@/public/assets/team/Headshots 2026 Fall/Anvi.png";
const OFFICERS = {
  my_goat: [
    {
      bigTitle: "Business",
      image: "/assets/team/Fall2025Officers/Arav.png",
      name: "Arav Neroth",
      role: "Business Director",
      quote:
        "The business team exists to ensure that all our competition teams have the funding to not only compete but excel. As a part of the business team, you will have the opportunity to engage in corporate outreach and secure partnerships that allow Dallas Formula Racing to grow. You'll have a platform to directly apply the business skills you learn through coursework within a practical setting. It's like a sandbox for business:).",
    },
  ],
  leadership: [
    {
      bigTitle: "Business",
      image: DFRWheelImage,
      name: "Fawaz Jamshed",
      role: "Business Director",
      quote:
        "The business team exists to ensure that all our competition teams have the funding to not only compete but excel. As a part of the business team, you will have the opportunity to engage in corporate outreach and secure partnerships that allow Dallas Formula Racing to grow. You'll have a platform to directly apply the business skills you learn through coursework within a practical setting. It's like a sandbox for business:).",
    },
  ],
  sponsorship: [
    {
      image: "/assets/team/Fall2025Officers/Aditya.png",
      name: "Aditya Praveen",
      role: "Development Director",
      quote:
        "The Development team is responsible for securing funding for the team through sponsorships, partnerships, and other forms of financial support. We also work to promote the team and its partners to a broader audience and manage the team's relationships with its partners and sponsors to ensure that expectations are met and any issues are addressed. These efforts help to ensure the financial stability and success of the team. As a member of this team, you will get an understanding of how economic and social aspects affect each of the engineering subsystems. Personally, I have gained valuable experience as a public speaker and in the engineering field within this organization.",
    },
  ],
  outreach: [
    {
      image: Anvi,
      name: "Anvi Sharma",
      role: "Development Director",
      quote:
        "The Development team focuses on securing financial support for the team through sponsorships, partnerships, and other funding opportunities. In addition, we promote the team and its partners to a wider audience while maintaining strong relationships with sponsors and partners. This includes making sure their expectations are fulfilled and addressing any concerns that may arise. Together, these responsibilities contribute to the team's long-term financial stability and overall success. Being part of this team has also given me insight into how economic and social factors influence different engineering subsystems. On a personal level, I have developed valuable public speaking skills and gained meaningful experience in the engineering field through my involvement in this organization.",
    },
  ],

  
};

export default function Page() {
  return (
    <main>
      <div className="hidden md:flex md:flex-row gap-4 p-0 sm:p-16">
        <div className="w-1/3 relative">
          <Image
            src={OFFICERS.my_goat[0].image}
            alt="Business Director"
            fill={true}
            className="rounded-lg object-contain w-full md:ml-36 lg:ml-48"
          />
        </div>
        <div className="w-2/3">
          <OfficerSection
            bigTitle={OFFICERS.my_goat[0].bigTitle}
            name={OFFICERS.my_goat[0].name}
            role={OFFICERS.my_goat[0].role}
            quote={OFFICERS.my_goat[0].quote}
          />
        </div>
      </div>

      <div className="md:hidden">
        <OfficerSection
          bigTitle={OFFICERS.my_goat[0].bigTitle}
          image={OFFICERS.my_goat[0].image}
          name={OFFICERS.my_goat[0].name}
          role={OFFICERS.my_goat[0].role}
          quote={OFFICERS.my_goat[0].quote}
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
        image={OFFICERS.leadership[0].image}
        name={OFFICERS.leadership[0].name}
        role={OFFICERS.leadership[0].role}
        quote={OFFICERS.leadership[0].quote}
      />
      <TitleSection
        image={OutreachImage}
        title="Outreach"
        subtitle="Engage with our local community through initiatives, events and more"
        position="BottomRight"
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

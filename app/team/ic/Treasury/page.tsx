import PlaceHolderImage from "@/public/assets/Cars/rescalepromo23pic.png";
import SponsorshipImage from "@/public/assets/newsletters/September2024NewsletterPreview.jpg";
import KevenDiaz from "@/public/assets/team/Spring2025Officers/KevenDiaz.png";
import Image from "next/image";
import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";

const OFFICERS = {
  leadership: [
    {
      bigTitle: "Treasury",
      image: "/assets/team/Fall2025Officers/Alondra.png",
      name: "Alondra Lopez",
      role: "Treasury Director",
      quote:
        "The business team exists to ensure that all our competition teams have the funding to not only compete but excel. As a part of the business team, you will have the opportunity to engage in corporate outreach and secure partnerships that allow Dallas Formula Racing to grow. You'll have a platform to directly apply the business skills you learn through coursework within a practical setting. It's like a sandbox for business:).",
    },
  ],
  sponsorship: [
    {
      image: KevenDiaz,
      name: "Keven Diaz",
      role: "Tresurer",
      quote:
        "The corporate relations team is responsible for securing funding for the team through sponsorships, partnerships, and other forms of financial support. We also work to promote the team and its partners to a broader audience and manage the team's relationships with its partners and sponsors to ensure that expectations are met and any issues are addressed. These efforts help to ensure the financial stability and success of the team. As a member of this team, you will get an understanding of how economic and social aspects affect each of the engineering subsystems. Personally, I have gained valuable experience as a public speaker and in the engineering field within this organization.",
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
        image={PlaceHolderImage}
        title=""
        subtitle=""
        position="BottomLeft"
      />
    </main>
  );
}

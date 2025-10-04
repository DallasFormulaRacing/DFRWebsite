import PlaceHolderImage from "@/public/assets/Cars/rescalepromo23pic.png";
import SponsorshipImage from "@/public/assets/newsletters/September2024NewsletterPreview.jpg";
import Image from "next/image";
import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";


const OFFICERS = {
 leadership: [
   {
     bigTitle: "Treasury",
     image: "/assets/team/Fall2025Officers/Alondra.png",
     name: "Alondra Lopez",
     role: "Treasury Lead",
     quote:
       "The treasury team exists to ensure that Dallas Formula Racing manages its resources wisely so every team can perform at its best. As part of treasury, you’ll gain hands-on experience with budgeting, forecasting, and financial planning that directly support our success on and off the track. It’s a chance to turn financial concepts from the classroom into real-world impact, where every dollar fuels performance.",
   },
 ],
 sponsorship: [
   {
     bigTitle: "Treasury",
     image: "/assets/team/Spring2025Officers/KevenDiaz.png",
     name: "Keven Diaz",
     role: "Tresury Lead",
     quote:
       "The treasury team is where strategy meets impact. We’re responsible for making sure every dollar helps Dallas Formula Racing go further, from fine-tuning budgets to supporting each competition team’s needs. Joining treasury means you’ll play a direct role in shaping how our resources fuel performance, while building financial skills that carry far beyond the track.",
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
           alt="Treasury Director"
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
       title=""
       subtitle=""
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




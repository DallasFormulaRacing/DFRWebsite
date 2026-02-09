import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import PMSection from "./PMSection";
import Image from "next/image";
import NabeelSalman from "@/public/assets/team/Headshots/NabeelSalman.png";
import ProjectsImage from "@/public/assets/team/ICPages/Software/Labjack.png";
import CommunityImage from "@/public/assets/team/IMG_3380 1.png";
import OutreachImage from "@/public/assets/team/IMG_3239 1.png";
import DashboardImage from "@/public/assets/team/ICPages/Software/Dashboard.png"
import SkillsImage from "@/public/assets/team/ICPages/Software/Skills.png"
import SoftwareInfrastructureImage from "@/public/assets/team/ICPages/Software/Infrastructure.png"
import DFRWheelImage from "@/public/dfr-logo-tyre.png"
import william from "@/public/assets/team/Fall2025Officers/william.png"
import joshua from "@/public/assets/team/Fall2025Officers/Joshua.png"
import Farah from "@/public/assets/team/Fall2025Officers/Farah.png"
import Reid from "@/public/assets/team/Fall2025Officers/Reid.png"
import arjun from "@/public/assets/team/Fall2025Officers/arjun.png"
const OFFICERS = {
  leadership: [
    {
      bigTitle: "Software",
      timings: "Fridays @ 6:00 pm", 
      image: arjun,
      name: "Arjun Nayak",
      role: "Software Lead",
      quote:
        "Being a part of this team has taught me so much about the parts of the car and how they interact with each other. I came into this team with a passion for programming and engineering and was able to watch both of these disciplines interact with each other to form a cohesive product. I hope to involve more people and teach them how to program and how we use it to analyze vehicle dynamics.",
    },
  ],
  projects: [
    {
      image: DFRWheelImage,
      name: "Sai Chauhan",
      role: "DFR Dashboard",
      quote:
        "The Web Dashboard is a new platform for analyzing and visualizing data from our racing sessions. It will connect to our Postgres database and provide tools for quadrant analysis, driver comparisons, and live dashboards. Members can view and analyze entire sessions, helping drivers and engineers make data-driven decisions to improve performance. This project will be started from scratch, using modern web development technologies to ensure a responsive and user-friendly experience.",
    },
    {
      image: joshua,
      name: "Joshua John",
      role: "CI/CD & Infrastructure",
      quote:
        "Implementing CI/CD pipelines for 4 different dashboards. The primary objective of these projects is to automate, deploy, and observe all our software. We use Infrastructure As Code products such as Terraform to provision and manage infrastructure. Using tools like Datadog and Sentry, we can observe the status of our software and enable quicker responses to failures. This ensures maximum scalability and reliability for engineers to see all their needs and data to assist with not only the development of the car, but also the management of the finances.",
    },
    {
      image: Reid,
      name: "Ried Minton",
      role: "Cloud Infrastructure",
      quote:
        "The Cloud Team is responsible for designing, implementing, and maintaining scalable cloud systems in Microsoft Azure to support the engineering team's data-driven decisions. Our focus is on developing robust pipelines for telemetry, simulation, and sensor data collection for IC and EV cars for real-time processing and analytics. Our work supports engineers in making performance optimizations and validating design decisions.",
    },
    {
      image: DFRWheelImage,
      name: "Andrew Klundt",
      role: "Onboard Car Software",
      quote:
        "A telemetry pipeline designed to run on a vehicle-mounted embedded system (Raspberry Pi). Its primary objective is to continuously read CAN bus data from the car's sensors and deliver it to our cloud infrastructure. The architecture ensures zero data loss through connectivity interruptions.",
    },
    {
      image: Farah,
      name: "Farah Munavary",
      role: "Finance Dashboard",
      quote:
        "The Finance Dashboard is designed to help SAE treasurers and admin team manage DFR finances in a more efficient manner. Features include centralized views of  budget breakdowns and incoming donations, as well as data visualization on subteam spending activity. By streamlining these elements into a single interface, the dashboard allows treasurers to monitor financial performance and allocate funds effectively. This platform is built using a Next.js framework, with shadcn UI components for an organized, responsive frontend, and a PostgreSQL database to securely store financial records.",
    },
    {
      image: william,
      name: "William Davis",
      role: "Software Ops",
      quote:
        `I am the lead for all software operations. Working alongside our PM's, making sure their tasks are getting done, their teams aren't running into roadblocks, and that they have the access and structure that they need to maintain their projects. I also manage onboarding of new software members, GitHub operations, shared account management, governance + documentation management and upkeep, and lead the development of our backend API architecture.\n

        Data-API - Used for exporting data across multiple file formats direct from our Postgres databases, posting and processing lap times, and serving as middleware for our dashboards.\n

        Vault - A zero-knowledge encrypted database API that stores all of DFR's secrets. Will be used by all of DFR's tech stack that needs to store secrets for operation, developed as a part of our tech stack redo.`,
    },
  ],
  
};

export default function Page() {
  return (
    <main>
      <TitleSection
        image={SoftwareInfrastructureImage}
        title="Software"
        timing="Fridays @ 6:00 pm"
        subtitle="The software subteam specializes in creating programs that help collect and analyze data for our race car. Whenever we push our car to the limit, we need to make sure that all of our components are running smoothly. Our projects like DataAnalyzer and PitSoftware help us do just that."
        position="BottomLeft"
      />
      <div className="hidden md:flex md:flex-row gap-4 p-0 sm:p-16">
        <div className="w-1/3 relative">
          <Image
            src={OFFICERS.leadership[0].image}
            alt="Software Lead"
            fill={true}
            className="rounded-lg object-contain w-full md:ml-36 lg:ml-48"
          />
        </div>
        <div className="w-2/3">
          <OfficerSection
            name={OFFICERS.leadership[0].name}
            role={OFFICERS.leadership[0].role}
            quote={OFFICERS.leadership[0].quote}
          />
        </div>
      </div>

      <div className="md:hidden">
        <OfficerSection
          image={OFFICERS.leadership[0].image}
          name={OFFICERS.leadership[0].name}
          role={OFFICERS.leadership[0].role}
          quote={OFFICERS.leadership[0].quote}
        />
      </div>

      <TitleSection
        image={ProjectsImage}
        title="Projects & Project Managers"
        subtitle="Build and develop the projects that fuel the team's success on and off the track"
        position="BottomLeft"
      />
      <PMSection
        image={OFFICERS.projects[0].image}
        image_2={OFFICERS.projects[1].image}
        image_3={OFFICERS.projects[2].image}
        name={OFFICERS.projects[0].name}
        name_2={OFFICERS.projects[1].name}
        name_3={OFFICERS.projects[2].name}
        role={OFFICERS.projects[0].role}
        role_2={OFFICERS.projects[1].role}
        role_3={OFFICERS.projects[2].role}
        quote={OFFICERS.projects[0].quote}
        quote_2={OFFICERS.projects[1].quote}
        quote_3={OFFICERS.projects[2].quote}
      />
      <PMSection
        image={OFFICERS.projects[3].image}
        image_2={OFFICERS.projects[4].image}
        image_3={OFFICERS.projects[5].image}
        name={OFFICERS.projects[3].name}
        name_2={OFFICERS.projects[4].name}
        name_3={OFFICERS.projects[5].name}
        role={OFFICERS.projects[3].role}
        role_2={OFFICERS.projects[4].role}
        role_3={OFFICERS.projects[5].role}
        quote={OFFICERS.projects[3].quote}
        quote_2={OFFICERS.projects[4].quote}
        quote_3={OFFICERS.projects[5].quote}
      />
      <TitleSection
        image={DashboardImage}
        title="Skills"
        subtitle="New members can learn about how to use Git and how we user repositories to manage and add contributions. They will also learn about programming OOP, CI/CD, Devops, ML, data analysis, agile, and web dev techniques used in the real world."
        position="BottomLeft"
      />
      <TitleSection
        image={SkillsImage}
        title="New Members"
        subtitle="New members joining the team can gain insight into the role of data in optimizing vehicle setup and develop skills in creating user-friendly products for fellow sub-team members. They will also learn to collaborate with other sub-teams to integrate their ideas into the DataAnalyzer projects. Our primary focus currently is on enhancing the functionality of the DataAnalyzer program, dedicated to analyzing data from the car's ECU and sensors, with ongoing efforts to incorporate additional channels for analysis."
        position="BottomLeft"
      />
     
    </main>
  );
}

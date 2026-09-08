import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOutlined,
  FileTextOutlined,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";
import OfficerList from "@/data/Hiredata.json";
import type { Officer, OfficerData } from "@/types/types";
import Linkedin from "/public/assets/social_links/linkedin_blue.png";
import BlankAvatar from "/public/assets/team/Headshots/blank_avatar.png";

type PageProps = {
  params: {
    section: string;
    slug: string;
  };
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function findOfficer(sectionParam: string, slugParam: string): Officer | null {
  const officerData = OfficerList as OfficerData;

  const matchingSection = Object.entries(officerData).find(
    ([sectionName]) => slugify(sectionName) === sectionParam,
  );

  if (!matchingSection) return null;

  const [, sectionData] = matchingSection;
  return (
    sectionData.data.find((officer) => slugify(officer.name) === slugParam) ?? null
  );
}

function buildBio(officer: Officer) {
  const role = officer.positions ?? "Lead";
  const section = officer.section || "team";
  const major = officer.major ?? "their academic program";
  const yearsOnTeam = officer.yearsOnTeam ?? "several";

  return `As ${role}, ${officer.name} helps lead the ${section} group and works with members to execute key goals across Dallas Formula Racing. Through this role, they build hands-on experience while supporting team performance on and off the car. ${officer.name} studies ${major} and has been involved with DFR for ${yearsOnTeam} year(s).`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const officer = findOfficer(params.section, params.slug);

  if (!officer) {
    return {
      title: "Lead Profile",
    };
  }

  return {
    title: `${officer.name} - Lead Profile`,
    description: `Profile for ${officer.name}, ${officer.positions ?? "Lead"} at Dallas Formula Racing.`,
  };
}

export default function LeadProfilePage({ params }: PageProps) {
  const officer = findOfficer(params.section, params.slug);
  if (!officer) notFound();

  const websiteHref =
    officer.websiteHref || officer.linkedin || "https://www.utdallas.edu";

  const quote = officer.quote?.trim() ? officer.quote.trim() : buildBio(officer);

  return (
    <main className="bg-[#ececec] p-3 sm:p-6">
      <section className="mx-auto grid min-h-[78vh] w-full max-w-[1320px] grid-cols-1 overflow-hidden rounded-sm bg-[#cfcfcf] md:grid-cols-[1.05fr_0.95fr]">
        <div className="px-8 py-10 lg:px-12 lg:py-14">
          <h1 className="text-5xl font-bold leading-tight text-[#1f252b]">
            {officer.name}&apos;s Profile
          </h1>
          <h2 className="mt-2 text-5 font-bold text-[#1f252b]">
            {officer.positions ?? "Lead"}
          </h2>

          <p className="mt-4 max-w-[560px] text-[22px] leading-7 text-[#242a30]">
            "{quote}"
          </p>

          <div className="mt-7 flex flex-col gap-3 text-[22px] text-[#1f252b]">
            <p className="flex items-center gap-3">
              <BookOutlined />
              <span>
                {officer.year ?? "Member"} in {officer.major ?? "Dallas Formula Racing"}
              </span>
            </p>

            {officer.email ? (
              <p className="flex items-center gap-3">
                <MailOutlined />
                <a className="underline" href={`mailto:${officer.email}`}>
                  {officer.email}
                </a>
              </p>
            ) : null}

            {officer.linkedin ? (
              <p className="flex items-center gap-3">
                <Image src={Linkedin} alt="LinkedIn" width={20} height={20} />
                <Link href={officer.linkedin} target="_blank" rel="noreferrer" className="underline">
                  {officer.linkedin}
                </Link>
              </p>
            ) : null}

            {officer.resume ? (
              <p className="flex items-center gap-3">
                <FileTextOutlined />
                <Link
                  href={officer.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="underline">
                  Resume
                </Link>
              </p>
            ) : null}

            <p className="flex items-center gap-3">
              <GlobalOutlined />
              <Link href={websiteHref} target="_blank" rel="noreferrer" className="underline">
                {websiteHref.replace(/^https?:\/\//, "")}
              </Link>
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center md:min-h-full">
          <Image
            src={officer.image ? officer.image : BlankAvatar}
            alt={officer.name}
            width={560}
            height={680}
            className="max-h-[72vh] w-auto object-contain"
            sizes="(max-width: 768px) 90vw, 42vw"
            priority
          />
        </div>
      </section>
    </main>
  );
}

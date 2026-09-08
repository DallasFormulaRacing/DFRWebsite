"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OfficerList from "@/data/Hiredata.json";
import type { Officer, OfficerData } from "@/types/types";
import Linkedin from "/public/assets/social_links/linkedin_blue.png";
import BlankAvatar from "/public/assets/team/old Headshots/blank_avatar.png";

type FilterKey = "ALL" | "Admin" | "IC" | "Business" | "EV" | "F1Tenth";

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: "ALL", label: "View all" },
  { key: "Admin", label: "Admin" },
  { key: "IC", label: "Internal Combustion vehicle" },
  { key: "Business", label: "Business" },
  { key: "EV", label: "Electric Vehicles" },
  { key: "F1Tenth", label: "F1 Tenth" },
];

type OfficerWithSection = Officer & { sectionKey: string };

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function LeadsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Admin");
  const officerData = OfficerList as OfficerData;

  const officers = useMemo(() => {
    const allOfficers: OfficerWithSection[] = Object.entries(officerData).flatMap(
      ([sectionKey, sectionData]) =>
        sectionData.data.map((officer) => ({
          ...officer,
          sectionKey,
        })),
    );

    if (activeFilter === "ALL") return allOfficers;

    return allOfficers.filter((officer) => officer.sectionKey === activeFilter);
  }, [activeFilter, officerData]);

  return (
    <main className="min-h-screen bg-[#ececec] py-12 px-3 sm:px-4">
      <section className="mx-auto w-full max-w-[1380px]">
        <h1 className="text-center text-4xl font-bold text-[#2b3238]">
          Meet our Administrative Team
        </h1>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-black bg-white text-black hover:bg-gray-100"
                }`}>
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {officers.map((officer, index) => (
            <article
              key={`${officer.name}-${officer.sectionKey}-${index}`}
              className="relative h-[200px] overflow-hidden rounded-md bg-[#cfcfcf] px-5 py-4">
              <div className="relative z-10 max-w-[52%]">
                <h2 className="text-4 font-bold leading-tight text-[#1f252b]">
                  {officer.name}
                </h2>
                <p className="text-base leading-tight text-[#1f252b]">
                  {officer.positions ?? "Lead"}
                </p>
                <p className="mt-1 text-sm leading-tight text-[#2f353b]">
                  {officer.major ?? "Dallas Formula Racing"}
                </p>
                {officer.linkedin ? (
                  <Link
                    href={`/team/leads/${slugify(officer.sectionKey)}/${slugify(officer.name)}`}
                    className="mt-1 inline-block text-sm font-semibold text-[#1f252b]">
                    More info &gt;
                  </Link>
                ) : (
                  <Link
                    href={`/team/leads/${slugify(officer.sectionKey)}/${slugify(officer.name)}`}
                    className="mt-1 inline-block text-sm font-semibold text-[#1f252b]">
                    More info &gt;
                  </Link>
                )}
              </div>

              <div className="absolute right-3 top-0 flex h-full w-[160px] items-center justify-center">
                <div className="relative h-[132px] w-[132px] overflow-hidden rounded-full">
                  <Image
                    src={officer.image ? officer.image : BlankAvatar}
                    alt={officer.name}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              </div>

              {officer.linkedin ? (
                <Link
                  href={officer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-2 left-2">
                  <Image src={Linkedin} alt="LinkedIn" width={14} height={14} />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

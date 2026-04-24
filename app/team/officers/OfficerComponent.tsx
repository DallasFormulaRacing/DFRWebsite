"use client";
import { motion } from "framer-motion";
import React from "react";
import OfficerCardV2 from "./OfficerCardV2";
import { OfficerData } from "@/types/types";
import OfficerList from "@/data/OfficerData.json";

type Props = {};

const OfficerComponent = (props: Props) => {
  const officerList: OfficerData = OfficerList;
  const officerSections = Object.entries(officerList);

  return (
    <section className="flex flex-col justify-center w-5/6 mx-auto">
      {officerSections.map(([sectionName, sectionData]) => (
        <div className="py-12" key={sectionName}>
          <motion.h1
            className={"text-5xl font-bold text-center my-12"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            {sectionName === "F1Tenth" ? "F1 Tenth" : sectionName}
          </motion.h1>
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8"
            }>
            {sectionData.data.map((officer, index) => (
              <OfficerCardV2 officer={officer} key={`${sectionName}-${index}`} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OfficerComponent;

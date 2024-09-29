"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import OfficerCardV2 from "./OfficerCardV2";
import { Officer, OfficerData } from "@/types/types";
import OfficerList from "@/data/OfficerData.json";
import { Space } from "antd";

type Props = {};

const OfficerComponent = (props: Props) => {
  const [officerList, setOfficerList] = useState<OfficerData>(OfficerList);

  return (
    <section className="flex flex-col justify-center w-5/6 mx-auto">
      <div className="py-12">
        <motion.h1
          className={"text-5xl font-bold text-center my-12"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Admin
        </motion.h1>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-12"
          }
        >
          {officerList.Admin.data.map((officer, index) => (
            <OfficerCardV2 officer={officer} key={index} />
          ))}
        </div>
      </div>

      <div className="py-12">
        <motion.h1
          className={"text-5xl font-bold text-center my-12"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          IC
        </motion.h1>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8"
          }
        >
          {officerList.IC.data.map((officer, index) => (
            <OfficerCardV2 officer={officer} key={index} />
          ))}
        </div>
      </div>

      <div className="py-12">
        <motion.h1
          className={"text-5xl font-bold text-center my-12"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Business
        </motion.h1>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8"
          }
        >
          {officerList.Business.data.map((officer, index) => (
            <OfficerCardV2 officer={officer} key={index} />
          ))}
        </div>
      </div>

      <div className="py-12">
        <motion.h1
          className={"text-5xl font-bold text-center my-12"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EV
        </motion.h1>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8"
          }
        >
          {officerList.EV.data.map((officer, index) => (
            <OfficerCardV2 officer={officer} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficerComponent;

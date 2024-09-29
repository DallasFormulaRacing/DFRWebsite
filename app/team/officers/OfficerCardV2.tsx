"use client";

import { motion } from "framer-motion";
import React from "react";
import { Officer } from "@/types/types";
import Image from "next/image";
import Linkedin from "/public/assets/social_links/linkedin_blue.png";
import Link from "next/link";
import BlankAvatar from "/public/assets/team/Headshots/blank_avatar.png";
import { Row, Col } from "antd";

type Props = {};

const OfficerCard = ({ officer }: { officer: Officer }) => {
  return (
    <motion.div
      className={
        "flex flex-col justify-end items-center w-full max-w-[400px] h-[525px]"
      }
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      <div className={"border-officer-orange border-t-2 border-x-2 w-full p-2"}>
        <h1 className={"text-2xl font-bold text-center mt-2"}>
          {officer.name}
        </h1>
        <h2 className={"text-center text-xl"}>{officer.positions}</h2>
      </div>

      <Image
        src={officer.image ? officer.image : BlankAvatar}
        alt={officer.name}
        width={225}
        height={225}
        className={
          "bg-white border-4 mt-8 border-accent-orange-light rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        }
        loading="eager"
        placeholder={"blur"}
        blurDataURL="/assets/team/Headshots/blank_avatar.png"
      />

      <div
        className={
          "text-center h-[400px] p-4 flex flex-col items-center w-full border-officer-orange border-b-2 border-x-2"
        }>
        <div
          className={
            "mt-4 text-lg mx-2 text-center flex flex-col items-center gap-2"
          }>
          <Row className="">
            <Col className="ml-2 text-lg">
              <a
                className="text-black underline text-center"
                href={`mailto:${officer.email}`}>
                {officer.email}
              </a>
            </Col>
          </Row>
          <Row className="">
            <Col className="ml-2 text-lg">
              <p>
                {officer.major} - {officer.year}
              </p>
            </Col>
          </Row>
          <Row className="">
            <Col className="ml-2 text-lg">
              <p>{officer.yearsOnTeam} year(s)</p>
            </Col>
          </Row>
        </div>

        <div className={"mt-4 flex justify-center gap-4 w-full"}>
          {officer.linkedin ? (
            <Link href={officer.linkedin} target="_blank" rel={"noreferrer"}>
              <Image
                width={40}
                height={40}
                alt={"logo"}
                placeholder={"blur"}
                src={Linkedin}
                style={{ objectFit: "scale-down" }}
              />
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default OfficerCard;

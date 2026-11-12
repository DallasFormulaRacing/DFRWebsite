"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Officer } from "@/types/types";
import Image from "next/image";
import Linkedin from "/public/assets/social_links/linkedin_blue.png";
import Link from "next/link";
import BlankAvatar from "/public/assets/team/old Headshots/blank_avatar.png";
import { Row, Col } from "antd";

type Props = {
  officer: Officer;
  isExpanded?: boolean;
  onToggle?: () => void;
};

const stop = (e: React.MouseEvent) => e.stopPropagation();

const OfficerCard = ({ officer, isExpanded = false, onToggle }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // Bring the enlarged card into view once it opens
  useEffect(() => {
    if (isExpanded && ref.current) {
      const t = setTimeout(
        () => ref.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
        150
      );
      return () => clearTimeout(t);
    }
  }, [isExpanded]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle?.();
    }
  };

  return (
    <motion.div
      ref={ref}
      layout
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onClick={onToggle}
      onKeyDown={handleKey}
      className={
        isExpanded
          ? "col-span-full w-full cursor-pointer"
          : "flex flex-col justify-end items-center w-full max-w-[400px] h-[525px] cursor-pointer"
      }
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      <AnimatePresence mode="wait" initial={false}>
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={
              "relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full border-2 border-officer-orange p-6 md:p-12"
            }>
            <button
              type="button"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                onToggle?.();
              }}
              className="absolute top-3 right-4 text-3xl leading-none hover:text-officer-orange">
              &times;
            </button>

            {/* Info — left */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{officer.name}</h1>
                <h2 className="text-2xl md:text-3xl mt-2">{officer.positions}</h2>
              </div>
              <div className="flex flex-col gap-3 text-lg md:text-xl mt-4">
                <p>
                  <span className="font-bold">Email: </span>
                  <a
                    className="text-black underline break-all"
                    href={`mailto:${officer.email}`}
                    onClick={stop}>
                    {officer.email}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Major: </span>
                  {officer.major}
                </p>
                <p>
                  <span className="font-bold">Year: </span>
                  {officer.year}
                </p>
                <p>
                  <span className="font-bold">Years on Team: </span>
                  {officer.yearsOnTeam}
                </p>
              </div>
              {officer.linkedin ? (
                <div className="mt-2 flex justify-center md:justify-start">
                  <Link
                    href={officer.linkedin}
                    target="_blank"
                    rel={"noreferrer"}
                    onClick={stop}>
                    <Image
                      width={48}
                      height={48}
                      alt={"LinkedIn"}
                      placeholder={"blur"}
                      src={Linkedin}
                      style={{ objectFit: "scale-down" }}
                    />
                  </Link>
                </div>
              ) : null}
            </div>

            {/* Image — right */}
            <div className="flex-shrink-0">
              <Image
                src={officer.image ? officer.image : BlankAvatar}
                alt={officer.name}
                width={400}
                height={400}
                className={
                  "bg-white border-4 border-accent-orange-light rounded-full shadow-lg w-[260px] h-[260px] md:w-[400px] md:h-[400px] object-cover"
                }
                loading="eager"
                placeholder={"blur"}
                blurDataURL="/assets/team/Headshots/blank_avatar.png"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="compact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-end items-center w-full h-full">
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
                      href={`mailto:${officer.email}`}
                      onClick={stop}>
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
                  <Link
                    href={officer.linkedin}
                    target="_blank"
                    rel={"noreferrer"}
                    onClick={stop}>
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
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OfficerCard;

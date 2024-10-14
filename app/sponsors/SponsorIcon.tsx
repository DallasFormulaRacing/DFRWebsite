"use client";

import React, { useState } from "react";
import Image from "next/image";
import SponsorData from "@/data/SponsorData.json";
import DFRLogo from "@/public/DFR-Logo.png";
import { motion } from "framer-motion";
import { Sponsor } from "../../types/types";

type Props = {
    index: number;
};

export const SponsorIcon = ({ index }: Props) => {
    const [sponsorList, setSponsorList] = useState<Sponsor[]>(SponsorData);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index}
            className={"item relative w-48 h-48"}>
            {sponsorList.map((sponsor, position, sponsors) => (
                <a
                    href={sponsors[index].link}
                    rel={"noreferrer"}
                    target="_blank"
                    key={sponsors[index].name}>
                    <Image
                        fill
                        alt={sponsors[index].name}
                        //placeholder={"blur"}
                        src={sponsors[index].logo}
                        sizes={
                            "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 25dvw"
                        }
                        style={{ objectFit: "scale-down" }}
                    />
                </a>
            ))}
        </motion.div>
    );
};

export default SponsorIcon;

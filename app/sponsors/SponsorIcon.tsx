"use client";

import React, { useState } from "react";
import Image from "next/image";
import SponsorData from "./SponsorData";
import DFRLogo from "@/public/DFR-Logo.png";
import { Sponsor } from "../types";

type Props = {
    index: number;
};

export const SponsorIcon = ({ index }: Props) => {
    const [sponsorList, setSponsorList] = useState<Sponsor[]>(SponsorData);
    return (
        <div key={index} className={"item relative w-64 h-64"}>
            {sponsorList.map((sponsor, position, sponsors) => (
                <a href={sponsors[index].link} rel={"noreferrer"}>
                    <Image
                        fill
                        alt={sponsors[index].name}
                        // placeholder={"blur"}
                        src={sponsors[index].logo}
                        style={{ objectFit: "contain" }}
                    />
                </a>
            ))}
        </div>
    );
};

export default SponsorIcon;

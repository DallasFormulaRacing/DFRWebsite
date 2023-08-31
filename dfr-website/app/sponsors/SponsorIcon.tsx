"use client";

import React, { useState } from "react";
import Image from "next/image";
import SponsorData from "./SponsorData";
import DFRLogo from "@/public/DFR-Logo.png";
import { Sponsor } from "../types";

type Props = {
    index: number;
};

export const SponsorIcon = ({index}: Props) => {
    const [sponsorList, setSponsorList] = useState<Sponsor[]>(SponsorData);
    return (
        <div className={"basis-full relative w-auto h-32"}>
            {sponsorList.map((sponsor, position, sponsors) => (
                <a href={sponsors[index].link} rel={"noreferrer"}>
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
        </div>
    );
};

export default SponsorIcon;

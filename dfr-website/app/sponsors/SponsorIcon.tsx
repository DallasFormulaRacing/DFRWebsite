import React from "react";
import Image from "next/image";
import SponsorData from "./SponsorData";
import DFRLogo from "@/public/DFR-Logo.png";

type Props = {};

export const SponsorIcon = () => {
    return (
        <div className={"basis-1/6 relative w-auto h-32"}>
            <a href={"/"} rel={"noreferrer"}>
                <Image
                    fill
                    alt={"logo"}
                    placeholder={"blur"}
                    src={DFRLogo}
                    sizes={
                        "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 25vw"
                    }
                    style={{ objectFit: "scale-down" }}
                />
            </a>
        </div>
    );
};

export default SponsorIcon;

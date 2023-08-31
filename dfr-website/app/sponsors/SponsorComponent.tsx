import React from "react";
import Image from "next/image";
//import SponsorsImage from "@/public/assets/sponsors/sponsors.png";
import SponsorIcon from "./SponsorIcon";

type Props = {};

export const Sponsors = (props: Props) => {
    return (
        <div className={"grid-rows-5"}>
          <h1 className={"text-5xl font-bold text-center mt-10"}>Sponsors</h1>
            <div
                className={
                    "flex justify-between row-span-1 items-center mx-40"
                }
            >
                <SponsorIcon index={0} />
                <SponsorIcon index={1} />
                <SponsorIcon index={2} />
                <SponsorIcon index={3} />
                <SponsorIcon index={4} />
            </div>
            <div
                className={
                    "flex justify-between row-span-1 items-center mx-40"
                }
            >
                <SponsorIcon index={5} />
                <SponsorIcon index={6} />
                <SponsorIcon index={7} />
                <SponsorIcon index={8} />
                <SponsorIcon index={9} />
            </div>

            <div
                className={
                    "flex justify-between row-span-1 items-center mx-40"
                }
            >
                <SponsorIcon index={10} />
                <SponsorIcon index={11} />
                <SponsorIcon index={12} />
                <SponsorIcon index={13} />
                <SponsorIcon index={14} />
            </div>

            <div
                className={
                    "flex justify-between row-span-1 items-center mx-40"
                }
            >
                <SponsorIcon index={15} />
                <SponsorIcon index={16} />
                <SponsorIcon index={17} />
                <SponsorIcon index={18} />
                <SponsorIcon index={19} />
            </div>
            <div
                className={
                    "flex justify-between row-span-1 items-center mx-40"
                }
            >
                <SponsorIcon index={20} />
                <SponsorIcon index={21} />
                <SponsorIcon index={22} />
                
            </div>
        </div>
    );
};

export default Sponsors;

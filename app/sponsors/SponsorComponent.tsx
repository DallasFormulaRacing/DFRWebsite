import React from "react";
import Image from "next/image";
import Link from "next/link";
import SponsorIcon from "./SponsorIcon";
import SponsorData from "./SponsorData";

type Props = {};

export const Sponsors = (props: Props) => {
    return (
        <div className={"py-24 px-2 md:mx-40"}>
            <h1 className={"text-5xl font-bold text-center mb-12"}>Sponsors</h1>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                {SponsorData.map((_ ,index) => ( 
                    <div key={index} className="flex justify-center">
                        <SponsorIcon index={index} />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-8 md:mt-16">
                <Link href="/contact-us">
                    <button className="bg-accent-green text-wh-0 text-lg font-semibold w-44 h-12 rounded-md">
                        Sponsor the Team
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sponsors;

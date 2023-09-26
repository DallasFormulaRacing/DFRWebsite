import ImageBreaks from "@/app/(shared-components)/ImageBreaks";
import React from "react";
import Image from "next/image";
import OfficerCard from "./OfficerCard";
import OfficerComponent from "./OfficerComponent";



type Props = {};

const testOfficer = {
    name: "Test Officer",
    positions: "Test Position",
    image: "/assets/Officers Page/test.jpg",
    year: "1 year",
    major: "Test Major",
    yearsOnTeam: "1 year",
    linkedin: "https://www.linkedin.com/in/kevin-chen-1b1b1b1b1/",
}

export default function Officers() {
    return (
        <div className={"team"}>
            {/* <h1 className={"pt-4"}>Admins</h1>
            <div className={"officerCards"}>
                <div className={"flex flex-wrap content-center justify-center gap-8 gap-x-8"}>
                    <div className={"flex min-h-[24rem]"}>
                        <OfficerCard officer={testOfficer} />
                    </div>
                </div>
                
            </div> */}
            <OfficerComponent />
        </div>
    );
}
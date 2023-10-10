"use client";
import React, { useState } from "react";
import OfficerCard from "./OfficerCard";
import { Officer, OfficerData } from "@/app/types";
import OfficerList from "./OfficerData";

type Props = {};

const testOfficer: Officer = {
    name: "Test Officer",
    positions: "Test Position",
    section: "admin",
    year: "1 year",
    major: "Test Major",
    yearsOnTeam: "1 year",
    linkedin: "https://www.linkedin.com/in/kevin-chen-1b1b1b1b1/",
};

const OfficerComponent = (props: Props) => {
    const [officerList, setOfficerList] = useState<OfficerData>(OfficerList);
    return (
        <div className={"w-3/4"}>
            <h1 className={"text-4xl font-bold text-center my-10"}>Admins</h1>
            <div className={"officerCards"}>
                {officerList.Admin.data.map((officer, index) => (
                    <OfficerCard officer={officer} />
                ))}
            </div>
        </div>
    );
};

export default OfficerComponent;

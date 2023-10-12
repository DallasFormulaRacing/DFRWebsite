"use client";
import React, { useState } from "react";
import OfficerCard from "./OfficerCard";
import { Officer, OfficerData } from "@/app/types";
import OfficerList from "./OfficerData";
import { Space } from "antd";

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
        <div className={"w-5/6 mx-auto"}>
            <h1 className={"text-5xl font-bold text-center my-12"}>Admin</h1>
            <div
                className={
                    "grid grid-cols-1 md:grid-cols-3 justify-items-center"
                }
            >
                {officerList.Admin.data.map((officer, index) => (
                    <OfficerCard officer={officer} />
                ))}
            </div>
        </div>
    );
};

export default OfficerComponent;

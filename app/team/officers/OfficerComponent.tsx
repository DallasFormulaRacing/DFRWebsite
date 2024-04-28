"use client";
import React, { useState } from "react";
import OfficerCard from "./OfficerCard";
import { Officer, OfficerData } from "@/types/types";
import OfficerList from "@/data/OfficerData.json";
import { Space } from "antd";

type Props = {};

const OfficerComponent = (props: Props) => {
    const [officerList, setOfficerList] = useState<OfficerData>(OfficerList);

    return (
        <section>
            <div className={"w-5/6 mx-auto py-12"}>
                <h1 className={"text-5xl font-bold text-center my-12"}>
                    Admin
                </h1>
                <div
                    className={
                        "grid grid-cols-1 md:grid-cols-3 justify-items-center"
                    }
                >
                    {officerList.Admin.data.map((officer, index) => (
                        <OfficerCard officer={officer} key={index} />
                    ))}
                </div>
            </div>
            <div className={"w-5/6 mx-auto py-12"}>
                <h1 className={"text-5xl font-bold text-center my-12"}>
                    Engineering
                </h1>
                <div
                    className={
                        "grid grid-cols-1 md:grid-cols-3 justify-items-center"
                    }
                >
                    {officerList.Engineering.data.map((officer, index) => (
                        <OfficerCard officer={officer} key={index} />
                    ))}
                </div>
            </div>
            <div className={"w-5/6 mx-auto py-12"}>
                <h1 className={"text-5xl font-bold text-center my-12"}>
                    Business
                </h1>
                <div
                    className={
                        "grid grid-cols-1 md:grid-cols-3 justify-items-center"
                    }
                >
                    {officerList.Business.data.map((officer, index) => (
                        <OfficerCard officer={officer} key={index} />
                    ))}
                </div>
            </div>
            <div className={"w-5/6 mx-auto py-12"}>
                <h1 className={"text-5xl font-bold text-center my-12"}>EV</h1>
                <div
                    className={
                        "grid grid-cols-1 md:grid-cols-3 justify-items-center"
                    }
                >
                    {officerList.EV.data.map((officer, index) => (
                        <OfficerCard officer={officer} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficerComponent;

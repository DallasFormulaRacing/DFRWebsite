"use client";
import React, { useState } from "react";
import SubTeamHeader from "../../(components)/SubTeamHeader";
import LeadHeader from "../../(components)/LeadHeader";
import { Col, Row, Card } from "antd";
import OfficerList from "../../../officers/OfficerData";
import Image from "next/image";
import { Officer, OfficerData } from "@/app/types";
import BlankAvatar from "/public/assets/team/Headshots/blank_avatar.png";

type Props = {};

const { Meta } = Card;

export default function Aerodynamics() {
    const [officerList, setOfficerList] = useState<OfficerData>(OfficerList);
    return (
        <main className="tracking-wide my-4">
            <SubTeamHeader
                Subteam="Aerodynamics"
                Meetings="TBD"
                HeaderInfo="This team focuses on aerodynamic development 
                in the search for reducing lap times. The main component 
                focus will be on downforce devices, bodywork drag reduction, 
                and cooling."
            />

            {/* <Row>
                <Col span={12}>
                    <Image
                        src={
                            officerList.Engineering.data[0].image
                                ? officerList.Engineering.data[0].image
                                : BlankAvatar
                        }
                        alt="Aerodynamics Lead"
                        fill
                        className="rounded-lg object-contain w-full md:ml-18 lg:ml-24"
                    />
                </Col>
                <Col span={12}>
                    <LeadHeader
                        LeadName={officerList.Engineering.data[0].name}
                        SubTeam="Aerodynamics"
                        LeadBio="This team has been the perfect opportunity 
                        for me to explore my passion for motorsport engineering 
                        and has let me find a niche at UTD that I deeply care about. 
                        This team has let me teach other passionate individuals about 
                        topics I care about, which is something I’m very grateful for. 
                        I hope I can continue this process of learning and teaching for 
                        future members to continue to benefit from."
                        // Email={officerList.Engineering.data[0].email} cannot be null email
                        Email="rrh200002@utdallas.edu"
                    />
                </Col>
                      </Row> */}
            <div className="flex justify-center">
                <Card
                    className="flex flex-col text-center w-[400px] md:w-[750px] mx-auto my-8"
                    hoverable
                    cover={
                        <img
                            src={officerList.Engineering.data[0].image}
                            alt="Aerodynamics Lead"
                            className="object-contain py-4"
                            style={{ height: "200px" }}
                        />
                    }
                >
                    <Meta
                        title={officerList.Engineering.data[0].name}
                        description="This team has been the perfect opportunity for 
                    me to explore my passion for motorsport engineering and has 
                    let me find a niche at UTD that I deeply care about. This team 
                    has let me teach other passionate individuals about topics I care 
                    about, which is something I’m very grateful for. I hope I can continue 
                    this process of learning and teaching for future members to continue to 
                    benefit from."
                    />
                </Card>
            </div>
        </main>
    );
}

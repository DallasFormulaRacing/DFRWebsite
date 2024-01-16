import React from "react";
import { Space, Card } from "antd";

type HeaderProps = {
    Subteam: string;
    Meetings: string;
    HeaderInfo: string;
    // LeadBio: string
    // ProjectTitles: [string]
    // ProjectDescriptions: [string]
    // Skills: string
    // NewMemberBenefits: string
};

const { Meta } = Card;

const SubTeamHeader = (props: HeaderProps) => {
    return (
        <section className="px-2 py-12 sm:p-24 mt-8 w-3/5 translate-x-[30%]">
            <h1 className="font-bold text-center mb-8 lg:text-5xl text-3xl md:text-5xl">
                {props.Subteam}
            </h1>
            <Space className="w-full" direction="vertical" size={"large"}>
                <Space
                    direction="vertical"
                    align="center"
                    size={"middle"}
                    className="w-full px-2"
                >
                    <h3 className="text-center text-xl">
                        Meetings: {props.Meetings}
                    </h3>
                    <p className="text-center text-xl ">
                        {props.HeaderInfo}
                    </p>
                </Space>
            </Space>
        </section>
    );
};

export default SubTeamHeader;

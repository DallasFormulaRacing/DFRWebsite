import React from "react";
import OfficerList from "../../officers/OfficerData";

type LeadHeaderProps = {
    LeadName: string;
    SubTeam: string;
    LeadBio: string;
    Email: string;
};

const LeadHeader = (props: LeadHeaderProps) => {
    return (
        <div className={"bg-black w-3/4 h-1/2 my-10"}>
            <div className={"items-center justify-center py-8"}>
                <h1 className={"text-white text-3xl mx-4 my-4"}>
                    {props.LeadName}
                </h1>
                <h2 className={"text-white text-2xl mx-10 my-8"}>
                {props.SubTeam} Lead
                </h2>
                <p className={"text-white text-xl mx-10"}>
                    {props.LeadBio}
                </p>
            </div>
        </div>
    );
};

export default LeadHeader;

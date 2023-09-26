import React from "react";

type Props = {};

const SubTeamHeader = (props: Props) => {
    return (
        <div className={"bg-black w-3/4 h-1/2 my-10"}>
            <div className={"items-center justify-center py-8"}>
                <h1 className={"text-white text-3xl mx-4 my-4"}>Aerodynamics</h1>
                <h2 className={"text-white text-2xl mx-10 my-8"}>Ryan Hopke</h2>
                <p className={"text-white text-xl mx-10"}>
                    “This team has been the perfect opportunity for me to
                    explore my passion for motorsport engineering, and has let
                    me find a niche at UTD that I deeply care about. This team
                    has let me teach other passionate individuals about topics I
                    care about, which is something I'm very grateful for. I hope
                    I can continue this process of learning and teaching for
                    future members to continue to benefit from.”
                </p>
            </div>
        </div>
    );
};

export default SubTeamHeader;

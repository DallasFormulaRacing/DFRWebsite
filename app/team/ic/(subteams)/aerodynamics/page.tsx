import React from "react";
import SubTeamHeader from "../../(components)/SubTeamHeader";

type Props = {};

export default function Aerodynamics() {
    return (
        <main className="tracking-wide h-full">
            <SubTeamHeader
                Subteam="Aerodynamics"
                Meetings="TBD"
                HeaderInfo="This team focuses on aerodynamic development 
                in the search for reducing lap times. The main component 
                focus will be on downforce devices, bodywork drag reduction, 
                and cooling."
            />
        </main>
    );
}

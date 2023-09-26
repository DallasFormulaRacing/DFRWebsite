import React from "react";
import SponsorIcon from "./SponsorIcon";
import SponsorsComponent from "./SponsorComponent";
import { SponsorHeaderInfo } from "./SponsorHeaderInfo";

type props = {};

export default function Sponsors(props: props) {
    return (
        <main className={"px-0 leading-7"}>
            <div>
                <SponsorHeaderInfo />
                <SponsorsComponent />
            </div>
        </main>
    );
}

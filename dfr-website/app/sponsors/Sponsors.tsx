import React from "react";
import Image from "next/image";
//import SponsorsImage from "@/public/assets/sponsors/sponsors.png";
import SponsorIcon from "./SponsorIcon";

type Props = {};



export const Sponsors = (props: Props) => {
  return (
    <div className={"basis-full relative w-auto h-256 mt-0 mb-4"}>
      <SponsorIcon index={0}/>
    </div>
  );
};

export default Sponsors;

import React from "react";
import Image from "next/image";
import SponsorsImage from "@/public/assets/sponsors/sponsors.png";

type Props = {};

export const Sponsors = (props: Props) => {
  return (
    <div className={"basis-full relative w-auto h-256 mt-0 mb-4"}>
      <Image
        fill
        alt={"Sponsors"}
        src={SponsorsImage}
        sizes={
          "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
        }
        style={{ objectFit: "contain" }}
        unoptimized
      />
    </div>
  );
};

export default Sponsors;

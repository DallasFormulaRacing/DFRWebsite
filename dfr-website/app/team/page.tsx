import React from "react";
import Image from "next/image";
import TeamImage2023 from "@/public/assets/team/2023CompTeamPic.webp";
import ImageBreaks from "../(shared-components)/ImageBreaks";

type Props = {};

export default function Team(props: Props) {
  return (
    <main>
      <ImageBreaks
        image={TeamImage2023.src}
        imageHeight={"h-176"}
        imageFit={"object-fill"}
        imageBrightness={"brightness-50"}
      />
    </main>
  );
}

import React from "react";
import Image from "next/image";
import ImageBreaks from "../components/ImageBreaks";
import { TeamHistory } from "./TeamHistory";
import Car2022CloseUp from "@/public/assets/Cars/2022CloseUp.jpg";
import DFRTyreLogo from "@/public/dfr-logo-tyre.png";

type Props = {};

export default function Cars() {
    return (
        <main className={"px-0 leading-7"}>
            <div className={"relative"}>
                <ImageBreaks
                    image={Car2022CloseUp.src}
                    imageHeight={"h-176"}
                    imageFit={"object-cover"}
                />
                <div className={"absolute left-12 bottom-20"}>
                    <Image
                        fill
                        src={DFRTyreLogo}
                        alt={"DFRTyreLogo"}
                        placeholder={"blur"}
                        sizes={
                            "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 25dvw"
                        }
                    />
                </div>
            </div>
            <TeamHistory />
        </main>
    );
}

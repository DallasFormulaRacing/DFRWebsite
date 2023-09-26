import React from "react";
import ImageBreaks from "../(shared-components)/ImageBreaks";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";

type props = {};

export const SponsorHeaderInfo = (props: props) => {
    return (
        <div className={"relative"}>
            <ImageBreaks
                image={Car2023.src}
                imageHeight={"h-144"}
                imageFit={"object-fill"}
                imageBrightness={"brightness-50"}
            />
            <div className={"absolute left-1/3 bottom-1/2"}>
                <h1
                    className={
                        "sm:text-5xl md:text-8xl lg:text-10xl font-bold text-wh-75"
                    }
                >
                    Sponsors
                </h1>
            </div>
            <div className={"absolute mx-40 bottom-20"}>
                <p className={"text-wh-75 text-lg font-semibold"}>
                    Dallas Formula Racing is a student-led organization that
                    relies on the generosity of our sponsors and donors. We are
                    thankful to all of our supporters for helping our team
                    further develop the education of each student on our team.
                    Our supporters hold a special place in our heart and we
                    would like to acknowledge them below. We are proud to
                    represent our supporters. If you would like to make a
                    donation or become a sponsor contact us at
                    DallasFormulaRacing@gmail.com
                </p>
            </div>
        </div>
    );
};

export default SponsorHeaderInfo;

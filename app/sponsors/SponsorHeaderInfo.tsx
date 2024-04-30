import React from "react";
import ImageBreaks from "../components/ImageBreaks";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";

type props = {};

export const SponsorHeaderInfo = (props: props) => {
    return (
        <div className={"relative"}>
            <ImageBreaks
                image={Car2023.src}
                imageHeight={"h-224"}
                imageFit={"object-cover"}
                imageBrightness={"brightness-50"}
            />
            <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-1/2 text-center space-y-8"}>
                <h1
                    className={
                        "text-6xl md:text-7xl font-bold text-wh-75"
                    }
                >
                    Sponsors
                </h1>

                <div className={""}>
                    <p className={"text-wh-75 text-md md:text-lg font-semibold"}>
                        Dallas Formula Racing is a student-led organization that
                        relies on the generosity of our sponsors and donors. We
                        are thankful to all of our supporters for helping our
                        team further develop the education of each student on
                        our team. Our supporters hold a special place in our
                        heart and we would like to acknowledge them below. We
                        are proud to represent our supporters. If you would like
                        to make a donation or become a sponsor contact us at
                        DallasFormulaRacing@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SponsorHeaderInfo;

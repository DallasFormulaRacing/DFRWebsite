import React from "react";
import Card from "@/app/components/Card";
import CAC from "/public/assets/events/car_and_comets.jpg";
import CGD from "/public/assets/events/comet_giving_day.jpg";
import SLB from "/public/assets/events/super_lap_battle.jpg";

type Props = {};

export const Events = (props: Props) => {
  return (
    <section className={"mt-10"}>
      <hr className={"border-1"} />
      <div className={"flex items-center gap-3 my-8"}>
        <h4
          className={"bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold"}
        >
          Events
        </h4>
        <p className={"font-bold text-2xl"}>Latest Events in DFR</p>
      </div>
      <div className={"sm:flex justify-between gap-8"}>
        <Card
          className={"basis-1/3 mt-5 sm:mt-0"}
          imageHeight={"h-80"}
          image={CAC.src}
        ></Card>
        <Card
          className={"basis-1/3 mt-5 sm:mt-0"}
          imageHeight={"h-80"}
          image={CGD.src}
        ></Card>
        <Card
          className={"basis-1/3 mt-5 sm:mt-0"}
          imageHeight={"h-80"}
          image={SLB.src}
        ></Card>
        <Card
          className={"sm:flex justify-between items-center gap-3 mt-7 mb-5"}
          imageHeight={"h-80"}
          image={SLB.src}
        ></Card>
      </div>
    </section>
  );
};

export default Events;

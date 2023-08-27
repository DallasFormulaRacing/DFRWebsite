import React from "react";
import Link from "next/link";
import Image from "next/image";
import AeroMap from "@/public/AeroMap.jpg";

type ResearchCardProps = {
  className?: string;
};

const ResearchCard = ({ className }: ResearchCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={"/"}
    >
      <div className={"z-0 relative w-full h-full"}>
        <Image
          fill
          alt={"Research"}
          placeholder={"blur"}
          src={AeroMap}
          sizes={
            "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
          }
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={"absolute z-2 bottom-0 left-0 p-3"}>
        <h4
          className={
            "inline-block px-5 py-1 font-semibold bg-or-10 text-wh-900"
          }
        >
          Category
        </h4>
        <div className={"text-wh-100 mt-2"}>Title</div>
      </div>
    </Link>
  );
};

type Props = {};

const Research = (props: Props) => {
  return (
    <section className={"pt-3 pb-10"}>
      <div className={"flex items-center gap-3"}>
        <div className={"bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold"}>
          Research
        </div>
        <p className={"text-sm"}>Something here</p>
      </div>
      <div
        className={"sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3"}
      >
        <ResearchCard
          className={"col-span-2 row-span-2 bg-wh-500"}
        ></ResearchCard>
        <ResearchCard
          className={"col-span-2 row-span-1 bg-wh-500"}
        ></ResearchCard>
        <ResearchCard
          className={"col-span-1 row-span-1 bg-wh-500"}
        ></ResearchCard>
        <ResearchCard
          className={"col-span-1 row-span-1 bg-wh-500"}
        ></ResearchCard>
      </div>
    </section>
  );
};

export default Research;

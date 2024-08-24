import React from "react";
import { Card } from "antd";

type Props = {};

const StatsSection = (props: Props) => {
  return (
    <section className="px-2 py-12 sm:p-24">
      <div className={"text-center space-y-8 my-8"}>
        <h1 className={"text-5xl font-bold text-accent-orange"}>
          By the Numbers
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/4">
          <h1 className="text-3xl text-center">
            #1 in Texas for 2022 Business Presentation
          </h1>
        </Card>
        <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/4">
          <h1 className="text-3xl text-center">
            Over 4 different UTD schools involved
          </h1>
        </Card>
        <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/4">
          <h1 className="text-3xl text-center">
            18 different majors represented
          </h1>
        </Card>
        <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/4">
          <h1 className="text-3xl text-center">Established 2014</h1>
        </Card>
      </div>
    </section>
  );
};

export default StatsSection;

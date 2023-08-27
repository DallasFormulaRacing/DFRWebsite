import React from "react";

type Props = {};

export const OrgInfo = (props: Props) => {
  return (
    <main className={"px-0 leading-7 mx-auto w-4/5"}>
      <section className={"mt-10"}>
        <div className={"text-center my-8"}>
          <h1 className={"font-bold text-5xl"}>Mission Statement</h1>
          <p className={"my-8 font-semibold text-2xl"}>
            Our mission is to mtaintain the reputation of UT Dallas as a
            top-tier university in the annual Formula SAE competition and
            promote STEM in the local DFW community.
          </p>
        </div>
        <br />
        <div className={"text-center my-8"}>
          <h1 className={"font-bold text-5xl"}>About Formula SAE</h1>
          <p className={"my-8 font-semibold text-2xl"}>
            Formula SAE is an international collegiate competition hoseted by
            the Society of Automotive Engineers (SAE). This Collegiate Design
            Series (CDS) competion pushes students to go beyond classroom
            material by challenging them to design, build, and test the
            performance of a formula-style vehicle. Each vehicle is inspected in
            a series of tests to comply with all competition rules to ensure
            safety. Students are tested and scored on their knowledge of their
            vehicle design by experts in various industries and cars are tested
            on numerous metrics including acceleration, autocross, endurance,
            and skid pad.
          </p>
          <br />
          <p className={"my-8 font-semibold text-2xl"}>
            Formula SAE promotes careers and excellence in engineering as it
            encompasses all aspects of the automotive industry including
            research, design, manufacturing, testing, development, marketing,
            management, and finances.
          </p>
        </div>
        <br />
        <div className={"text-center my-8"}>
          <h1 className={"font-bold text-5xl mb-14"}>Stats</h1>
          <div className={"flex justify-between items-center"}>
            <p className={"my-8 font-semibold text-xl"}>
              #1 in Texas for 2022 Business Presentation
            </p>
            <div className="inline-block h-[150px] min-h-[1em] w-0.5 bg-wh-500"></div>
            <p className={"my-8 font-semibold text-xl"}>
              Over 4 different UTD schools involved
            </p>
            <div className="inline-block h-[150px] min-h-[1em] w-0.5 bg-wh-500"></div>
            <p className={"my-8 font-semibold text-xl w"}>
              18 different majors represented
            </p>
            <div className="inline-block h-[150px] min-h-[1em] w-0.5 bg-wh-500"></div>
            <p className={"my-8 font-semibold text-xl"}>
              8 years since establishment
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

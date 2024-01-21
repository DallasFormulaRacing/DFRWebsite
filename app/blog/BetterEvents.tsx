import React from "react";
// import { Post } from ".prisma/client";
import { FormattedPost } from "../types";
import Link from "next/link";
import Image from "next/image";
import AeroMap from "@/public/AeroMap.jpg";
import CAC from "/public/assets/events/car_and_comets.jpg";
import CGD from "/public/assets/events/comet_giving_day.jpg";
import SLB from "/public/assets/events/super_lap_battle.jpg";

type EventCardProps = {
  className?: string;
  //image: string;
  post: FormattedPost;
};

const EventCard = ({ className, post }: EventCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className={"z-0 relative w-full h-full"}>
        <Image
          fill
          alt={"Events"}
          //placeholder={"blur"}
          src={post?.image}
          sizes={
            "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
          }
          style={{ objectFit: "fill" }}
        />
      </div>
      <div
        className={
          "absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"
        }
      ></div>
      <div className={"absolute z-2 bottom-0 left-0 p-3"}>
        <h4
          className={
            "inline-block px-5 py-1 font-semibold bg-or-10 text-wh-900"
          }
        >
          {post?.category}
        </h4>
        <div className={"text-wh-100 mt-2"}>{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  eventPosts: Array<FormattedPost>;
};

const BetterEvents = ({ eventPosts }: Props) => {
  return (
    <section className={"pt-3 pb-10"}>
      <div className={"flex items-center gap-3"}>
        <div className={"bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold"}>
          Events
        </div>
        <p className={"text-sm"}>Something here</p>
      </div>
      <div
        className={"sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3"}
      >
        <EventCard
          className={"col-span-2 row-span-2 bg-wh-500"}
          post={eventPosts[0]}
        ></EventCard>
        <EventCard
          className={"col-span-2 row-span-1 bg-wh-500"}
          post={eventPosts[0]}
        ></EventCard>
        <EventCard
          className={"col-span-1 row-span-1 bg-wh-500"}
          post={eventPosts[0]}
        ></EventCard>
      </div>
    </section>
  );
};

export default BetterEvents;

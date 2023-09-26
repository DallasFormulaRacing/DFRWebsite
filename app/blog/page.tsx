import Image from "next/image";
import Script from "next/script";
import THREE from "three";
import React from "react";
import Car from "@/app/(CarModel)/3DCarModel";
import Research from "./Research";
import Events from "./Events";
import BetterEvents from "./BetterEvents";
import NewsLetter from "@/app/(shared-components)/NewsLetter";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
import { prisma } from "@/app/api/client";
import { Post } from ".prisma/client";

const getPosts = async () => {
    const posts = await prisma.post.findMany();

    const formattedPosts = await Promise.all(
        posts.map(async (post: Post) => {
            const imageModule = require(`../../public${post?.image}`);
            return {
                ...post,
                image: imageModule.default,
            };
        })
    );
    return formattedPosts;
};

export default async function Blog() {
    const posts = await getPosts();
    const formatPosts = () => {
        const eventPosts: Array<Post> = [];

        posts.forEach((post: Post, i: number) => {
            if (post?.category === "Events") {
                eventPosts.push(post);
            }
        });
        return [eventPosts];
    };

    const [eventPosts] = formatPosts();

    return (
        <main className={"px-8 leading-7"}>
            {/*<div className={"w-1/2 h-1/2"}>*/}
            {/*  <Car />*/}
            {/*</div>*/}
            <div className={"basis-full relative w-auto h-128 mt-2 mb-4"}>
                <Image
                    fill
                    alt={"2023Car"}
                    placeholder={"blur"}
                    src={Car2023}
                    sizes={
                        "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
                    }
                    style={{ objectFit: "cover" }}
                    unoptimized
                />
            </div>
            <BetterEvents eventPosts={eventPosts} />
            <Research />
            <div className={"md:flex gap-10 mb-5"}>
                <div className={"basis-3/4"}>
                    <div className={"hidden md:block"}>
                        <NewsLetter />
                    </div>
                </div>
            </div>
        </main>
    );
}

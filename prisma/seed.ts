import { PrismaClient } from "@prisma/client";
import * as process from "process";
//import SponsorData from "@/app/sponsors/SponsorData";

const prisma: any = new PrismaClient();

const posts = [
    {
        category: "Events",
        title: "Cars and Comets",
        content: "<h1><em>Car Show</em></h1>",
        author: "DFR Member",
        image: "/assets/events/car_and_comets.jpg",
        snippet:
            "Dallas Formula Racing is thrilled to announce that we will be hosting the Cars and Comets Car Show once again this semester!",
    },
];

async function main() {
    console.log(`Start seeding...`);
    for (const post of posts) {
        await prisma.post.create({
            data: post,
        });
    }
    console.log(`Seeding finished`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

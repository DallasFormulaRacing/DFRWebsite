import NewsletterArchive from "@/data/Newsletters.json";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dallas Formula Racing - Newsletters",
  description: `
    Stay updated with Dallas Formula Racing through our newsletters, featuring the latest news, events, 
    and achievements of our team. Each edition highlights our progress in designing, building, and competing with 
    formula-style vehicles, as well as the collaborative efforts of our members and sponsors.
  `,
};

export default function Newsletters() {
  return (
    <div className="w-full">
      <section className="px-8 md:px-24 py-10">
        <h1 className="text-6xl font-extrabold text-accent-orange mb-20">
          Newsletters
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 news-cards text-center">
          {NewsletterArchive.map((newsletter, index) => (
            <article
              key={index}
              className="relative bg-white shadow-lg min-h-[24rem] rounded-lg overflow-hidden flex flex-col">
              <p className="date absolute z-10 text-white text-center text-lg/6 m-4 py-1.5 drop-shadow-sm rounded-md min-w-[5rem]">
                {(() => {
                  const date = new Date(newsletter.date);
                  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
                  const day = date.toLocaleString("en-US", { day: "2-digit" });
                  const year = date.toLocaleString("en-US", { year: "numeric" });
                  return (
                    <>{month} <strong className="text-3xl leading-none">{day}</strong> {year}</>
                  );
                })()}
              </p>
              <div className="relative h-48 w-full">
                <Image
                  src={newsletter.previewImage}
                  alt={newsletter.title}
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-200"
                />
              </div>

              <div className="m-auto inset-0 py-4 px-10 grow flex flex-col place-items-center">
                <h2 className="text-white text-xl md:text-2xl font-bold md:max-w-[25rem] m-auto">
                  {newsletter.title}
                </h2>
                <Link
                  href={newsletter.url}
                  target="_blank"
                  className="mt-4 bg-accent-orange text-white text-lg font-semibold py-2 px-4 rounded hover:bg-orange-600 w-fit">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

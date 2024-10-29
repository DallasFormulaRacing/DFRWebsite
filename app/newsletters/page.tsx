import NewsletterArchive from "@/data/Newsletters.json";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Dallas Formula Racing - Newsletters',
  description: `
    Stay updated with Dallas Formula Racing through our newsletters, featuring the latest news, events, 
    and achievements of our team. Each edition highlights our progress in designing, building, and competing with 
    formula-style vehicles, as well as the collaborative efforts of our members and sponsors.
  `,
}

export default function Newsletters() {
  return (
    <div className="w-full">
      <section className="px-8 md:px-24 py-10">
        <h1 className="text-6xl font-extrabold text-accent-orange mb-20">
          Newsletters
        </h1>
        <div className="flex flex-wrap justify-evenly gap-24">
          {NewsletterArchive.map((newsletter, index) => (
            <article
              key={index}
              className="bg-white shadow-lg w-[20rem] md:w-[36rem] min-h-[24rem] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={newsletter.previewImage}
                  alt={newsletter.title}
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-200"
                />
              </div>
              <div className="border-t border-gray-200 p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-center break-words">
                  {newsletter.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  {newsletter.date}
                </p>
                <Link
                  href={newsletter.url}
                  target="_blank"
                  className="text-accent-orange hover:underline block text-center mt-auto">
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

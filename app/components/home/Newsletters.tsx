import NewsletterArchive from "@/data/Newsletters.json";
import Image from "next/image";
import Link from "next/link";

export default function NewslettersPreview() {
  return (
    <div className="w-full">
      <section className="relative px-8 md:px-24 my-20 text-center">

        <h1 className="text-6xl font-extrabold text-accent-orange mb-10 md:text-left">
          Newsletters
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 news-cards mb-10">
          {NewsletterArchive.slice(0, 3).map((newsletter, index) => (

            <article
              key={index}
              className="relative bg-white shadow-lg w-full min-h-[24rem] rounded-lg overflow-hidden flex flex-col">
              <p className="date absolute z-10 text-white text-center text-lg/6 m-4 py-1.5 drop-shadow-sm rounded-md min-w-[5rem]">
                {(() => {
                  const date = new Date(newsletter.date);
                  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
                  const day = date.toLocaleString("en-US", { day: "2-digit" });
                  return (
                    <>{month} <strong className="text-3xl leading-none">{day}</strong></>
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

              {/* Overlay */}
              <div className="m-auto inset-0 py-4 px-10 grow flex flex-col place-items-center">
                <h2 className="text-white text-2xl font-bold md:max-w-[25rem] m-auto">
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

        <Link href="/newsletters">
          <button className="bg-[#E87500] md:absolute top-0 md:right-24 text-white text-lg font-semibold min-w-[10rem] rounded-md p-4 md:text-center m-auto">
            Read More Newsletters
          </button>
        </Link>


      </section>
    </div>
  );
}

import NewsletterArchive from "@/data/Newsletters.json";
import Image from "next/image";
import Link from "next/link";

export default function NewslettersPreview() {
  return (
    <div className="w-full">
      <section className="px-8 md:px-24 py-10">
        <h1 className="text-6xl font-extrabold text-accent-orange mb-20">
          Newsletters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          {NewsletterArchive.slice(0, 4).map((newsletter, index) => (
            <article
              key={index}
              className="relative bg-white shadow-lg w-[22rem] md:w-[36rem] h-[24rem] rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={newsletter.previewImage}
                  alt={newsletter.title}
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-200"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <h2 className="text-white text-2xl font-bold mb-2 drop-shadow-md">
                    {newsletter.title}
                  </h2>
                  <p className="text-white text-sm mb-4 drop-shadow-sm">
                    {newsletter.date}
                  </p>
                  <Link
                    href={newsletter.url}
                    target="_blank"
                    className="bg-accent-orange text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 w-fit"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center md:justify-end mt-16">
          <Link href="/newsletters">
            <button className="bg-[#E87500] text-white text-lg font-semibold min-w-[10rem] rounded-md p-4">
              Read More Newsletters
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

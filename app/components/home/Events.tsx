import EventsArchive from "@/data/Events.json";
import UTDSAELogo from "@/public/dfr-sae.png";
import Image from "next/image";
import Link from "next/link";

export default function EventsPreview() {
  return (
    <div className="w-full pb-8">
      <section className="px-8 md:px-24 py-10">
        <h1 className="text-6xl font-extrabold text-accent-orange mb-20">
          Events
        </h1>
        <div className="flex flex-wrap justify-evenly gap-24">
          {EventsArchive.slice(0, 3).map((events, index) => (
            <article
              key={index}
              className="bg-white shadow-lg w-[20rem] md:w-[36rem] min-h-[24rem] rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={events.previewImage}
                  alt={events.title}
                  layout="fill"
                  objectFit="contain"
                  className="bg-gray-200"
                />
              </div>
              <div className="border-t border-gray-200 p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-center break-words">
                  {events.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Date: {events.date}
                </p>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Time: {events.time}
                </p>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Location: {events.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

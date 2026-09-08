import Image from "next/image";
import { StaticImageData } from "next/image";

export default function OfficerSection({
  image,
  name,
  role,
  quote,
}: {
  image?: StaticImageData | string;
  name?: string;
  role?: string;
  quote?: string;
}) {
  return (
    <section className="min-h-[60svh] bg-wh-900 flex justify-center items-center">
      <div className="p-8 my-8 md:p-24 flex flex-row flex-wrap items-center justify-center gap-8">
        <div>{image && (
          <Image
            width={300}
            height={300}
            src={image}
            alt="Officer headshot"
            className="rounded-lg"
          />
        )}
        </div>
        <div className="text-white space-y-4 w-full sm:w-3/4">
          <h1 className="text-5xl font-bold">{name}</h1>
          <h2 className="text-4xl font-semibold">{role}</h2>
          <p className="italic break-words text-2xl">"{quote}"</p>
        </div>
      </div>
    </section>
  );
}

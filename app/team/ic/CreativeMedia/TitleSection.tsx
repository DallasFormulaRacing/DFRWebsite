import Image, { StaticImageData } from "next/image";

type Position = "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";

const POSITIONS_TO_CLASS = {
  TopLeft: "absolute top-6 left-6",
  TopRight: "absolute top-6 right-6 text-right",
  BottomLeft: "absolute bottom-6 left-6",
  BottomRight: "absolute bottom-6 right-6 text-right",
};

export default function TitleSection({
  image,
  title,
  subtitle,
  position,
}: {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  position: Position;
}) {
  return (
    <section className="h-[70svh] relative">
      <Image
        src={image}
        alt={`Section for ${title} - ${subtitle}`}
        fill={true}
        className="object-cover w-full brightness-[80%]"
      />

      <div
        className={
          POSITIONS_TO_CLASS[position] + " text-white flex flex-col gap-6"
        }>
        <h1 className="text-6xl font-bold break-before-all sm:text-9xl">
          {title}
        </h1>
        <h2 className="text-2xl break-before-all pl-2">{subtitle}</h2>
      </div>
    </section>
  );
}

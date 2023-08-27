import React from "react";
import Link from "next/link";
import Image from "next/image";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";

type Props = {
  className?: string;
  image: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  image,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  //const { id, title, author, createdAt, image, snippet } = post || {};
  //const date = new Date(createdAt);
  //const options = { year: "numeric", month: "long", day: "numeric" } as any;
  //const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className={className}>
      <Link className={"basis-full hover:opacity-70"} href={"/"}>
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            fill
            alt={"tech"}
            //placeholder={"blur"}
            src={image}
            sizes={
              "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            }
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className={"basis-full"}>
        <Link href={"/"}>
          <h4
            className={`font-bold hover:text-accent-green 
                ${isSmallCard ? "text-base" : "text-lg"}
                ${isSmallCard ? "line-clamp-2" : ""}
                `}
          >
            Title
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className={"font-semibold text-xs"}> Author</h5>
          <h6 className={"text-wh-300 text-xs"}> Date</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          Description
        </p>
      </div>
    </div>
  );
};

export default Card;

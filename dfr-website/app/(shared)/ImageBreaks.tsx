import React, { CSSProperties, ReactPropTypes } from "react";
import Image from "next/image";

type ImageBreaksProps = {
  image: String;
  imageHeight: String;
  imageFit?: String;
  imageBrightness?: String;
};

const ImageBreaks = ({
  image,
  imageHeight,
  imageBrightness,
  imageFit,
}: ImageBreaksProps) => {
  return (
    <div className={`"basis-full relative w-auto ${imageHeight} mt-0 mb-4"`}>
      <Image
        fill
        alt={`${image}`}
        //placeholder={"blur"}
        src={`${image}`}
        sizes={
          "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
        }
        quality={100}
        className={`${imageFit} ${imageBrightness}`}
        unoptimized
      />
    </div>
  );
};

export default ImageBreaks;

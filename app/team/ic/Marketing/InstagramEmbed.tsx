"use client";
import { useEffect } from "react";

const InstagramEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="mt-8 w-full text-center">
      <blockquote
        className="instagram-media w-full max-w-[800px] mx-auto"
        data-instgrm-permalink={url}
        data-instgrm-version="14"></blockquote>
    </div>
  );
};

export default InstagramEmbed;

"use client";
import { useEffect } from "react";

const InstagramEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if script already exists
      const existing = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      );
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // Reprocess embeds if the script already exists
        // @ts-ignore
        if (window.instgrm?.Embeds?.process) {
          // @ts-ignore
          window.instgrm.Embeds.process();
        }
      }
    }
  }, [url]); // re-run if the URL changes

  return (
    <div className="mt-8 w-full flex justify-center">
      <blockquote
        className="instagram-media max-w-[400px] w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: "0 auto" }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;

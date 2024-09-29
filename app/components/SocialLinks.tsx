import React from "react";
import Image from "next/image";
import Twitter from "/public/assets/social_links/social_twitter.png";
import Facebook from "/public/assets/social_links/social_facebook.png";
import Instagram from "/public/assets/social_links/social_instagram.png";
import Google from "/public/assets/social_links/social_google.png";
import Discord from "/public/assets/social_links/social_discord.png";
import Linkedin from "/public/assets/social_links/social_linkedin.png";
import Youtube from "/public/assets/social_links/social_youtube.jpg";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className={"flex justify-between items-center gap-7"}>
      <a href={"https://youtube.com"} target={"_blank"} rel={"noreferrer"}>
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt={"youtube"}
          src={Youtube}
          width={30}
          height={30}
        />
      </a>

      <a href={"https://instagram.com"} target={"_blank"} rel={"noreferrer"}>
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt={"instagram"}
          src={Instagram}
          width={20}
          height={20}
        />
      </a>

      <a href={"https://linkedin.com"} target={"_blank"} rel={"noreferrer"}>
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt={"linkedin"}
          src={Linkedin}
          width={20}
          height={20}
        />
      </a>

      <a href={"https://discord.com"} target={"_blank"} rel={"noreferrer"}>
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt={"discord"}
          src={Discord}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;

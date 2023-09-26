"use client";

import React from "react";
import Link from "next/link";
import DFRLogo from "@/public/DFR-Logo.png";
import Image from "next/image";
import {
  InstagramFilled,
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
} from '@ant-design/icons';

const LINKS = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Join the Team",
    key: "/join-the-team",
  },
  {
    label: "Donate",
    key: "/donate",
  },
  {
    label: "Officers",
    key: "/officers",
  },
  {
    label: "Contact Us",
    key: "/contact-us",
  },
  {
    label: "Cars",
    key: "/cars",
  },
  {
    label: "Sponsors",
    key: "/sponsors",
  }
]

const Footer = () => {
  return (
    <footer className={"bg-wh-900 text-wh-50 py-10 px-10"}>
      <div className={"justify-between mx-auto gap-16 sm:flex"}>
        {/*First*/}
        <div className={"grid grid-cols-3 gap-6 mt-16 basis-1/4 sm:mt-0"}>
          {LINKS.map((link) => 
            <Link className={"col-span-1"} key={link.key} href={link.key}>
              {link.label}
            </Link>
          )}
        </div>

        {/*Second*/}
        <div className={"mt-16 basis-2/4 flex justify-center md:mt-0"}>
            <Image 
              src={DFRLogo}
              alt={"Dallas Formula Logo"}
              height={150}
              className="object-contain"
            />
        </div>

        {/*Third*/}
        <div className={"mt-16 basis-1/4 justify-end sm:mt-0"}>
          <h4 className={"font-bold"}>Social Media</h4>
          <div className={"flex flex-row flex-wrap gap-4 mt-4"}>
            <a 
              href={"https://www.linkedin.com/company/dallas-formula-racing/"}
              className="h-24 w-24"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <LinkedinFilled className="text-6xl"/>
            </a>
            <a 
              href={"https://www.youtube.com/@dallasformularacing3979"}
              className="h-24 w-24"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <YoutubeFilled className="text-6xl" />
            </a>
            <a 
              href={"https://www.facebook.com/dallasformularacing"}
              className="h-24 w-24"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FacebookFilled className="text-6xl" />
            </a>
            <a 
              href={"https://www.instagram.com/dallasformularacing"}
              className="h-24 w-24"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <InstagramFilled className="text-6xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

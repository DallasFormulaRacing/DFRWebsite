"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DFRLogo from "@/public/DFR-Logo.png";
import SocialLinks from "@/app/(shared-components)/SocialLinks";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
import { Bars3Icon } from "@heroicons/react/24/solid";

type Props = {};

const Navbar = (props: Props) => {
    const [navbarToggle, setNavbarToggle] = useState<boolean>(false);
    const [teamSectionToggle, setTeamSectionToggle] = useState<boolean>(false);

    return (

        <header className={"mb-0"}>
            <nav
                className={
                    "flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4 navbar"
                }
            >
                <div className={"basis-1/6 relative w-auto h-32"}>
                    <Link href={"/"} rel={"noreferrer"}>
                        <Image
                            fill
                            alt={"logo"}
                            placeholder={"blur"}
                            src={DFRLogo}
                            sizes={
                                "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 25vw"
                            }
                            style={{ objectFit: "scale-down" }}
                        />
                    </Link>
                </div>
                <ol className={"flex justify-between items-center gap-10"}>
                    <Link className={"navbarLink"} href={"/team"}>TEAM</Link>
                    <Link className={"navbarLink"} href={"/cars"}>CARS</Link>
                    <Link className={"navbarLink"} href={"/blog"}>BLOG</Link>
                    <Link className={"navbarLink"} href={"/sponsors"}>SPONSORS</Link>
                    <Link className={"navbarLink"} href={"/contact"}>CONTACT US</Link>
                    <Link className={"navbarLink"} href={"/donate"}>DONATE</Link>
                </ol>
                {/* <div>
                    <SocialLinks />
                </div> */}
                {/* <div className={"sm:hidden flex flex-1 justify-end items-center"}>
                    <Bars3Icon className={navbarToggle ? close : menu}/>
                </div> */}
            </nav>
            <hr className={"border-0"} />
        </header>
    );
};

export default Navbar;

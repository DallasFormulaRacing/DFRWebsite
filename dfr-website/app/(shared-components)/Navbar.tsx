import React from "react";
import Link from "next/link";
import Image from "next/image";
import DFRLogo from "@/public/DFR-Logo.png";
import SocialLinks from "@/app/(shared-components)/SocialLinks";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
1;
type Props = {};

const Navbar = (props: Props) => {
    return (
        <header className={"mb-0"}>
            <nav
                className={
                    "flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4"
                }
            >
                <div className={"basis-1/6 relative w-auto h-32"}>
                    <a href={"/"} rel={"noreferrer"}>
                        <Image
                            fill
                            alt={"logo"}
                            placeholder={"blur"}
                            src={DFRLogo}
                            sizes={
                                "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 25vw"
                            }
                            style={{ objectFit: "scale-down" }}
                        />
                    </a>
                </div>
                <div className={"hidden sm:block"}>
                    <SocialLinks />
                </div>
                <div className={"flex justify-between items-center gap-10"}>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/car"}>Car</Link>
                    <Link href={"/team"}>Team</Link>
                    <Link href={"/blog"}>News</Link>
                    <Link href={"/sponsors"}>Sponsors</Link>
                </div>
                <div>
                    <p>Sign In</p>
                </div>
            </nav>
            <hr className={"border-0"} />
        </header>
    );
};

export default Navbar;

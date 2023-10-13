"use client";

import Link from "next/link";
import {
    InstagramFilled,
    YoutubeFilled,
    FacebookFilled,
    LinkedinFilled,
} from "@ant-design/icons";
import NewsletterSubcribeForm from "./NewsletterSubscribeForm";

const SOCIAL_MEDIA = [
    {
        href: "https://www.linkedin.com/company/dallas-formula-racing/",
        icon: <LinkedinFilled className="text-3xl" />,
    },
    {
        href: "https://www.youtube.com/@dallasformularacing3979",
        icon: <YoutubeFilled className="text-3xl" />,
    },
    {
        href: "https://www.facebook.com/dallasformularacing",
        icon: <FacebookFilled className="text-3xl" />,
    },
    {
        href: "https://www.instagram.com/dallasformularacing",
        icon: <InstagramFilled className="text-3xl" />,
    },
];

const Footer = () => {
    return (
        <footer
            className={
                "bg-wh-900 text-wh-50 py-10 px-10 flex justify-center items-center min-h-[200px]"
            }
        >
            <div className="w-full gap-8 grid grid-cols-1 md:w-3/5 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">Newsletter</h3>
                    <NewsletterSubcribeForm />
                </div>
                <div className="flex flex-col gap-6">
                    <Link className="text-2xl font-bold" href="/about">
                        About
                    </Link>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Support</h3>
                        <Link href="/donate">Donate</Link>
                        <Link href="/sponsors">Sponsors</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">Location</h3>
                    <Link
                        href="https://goo.gl/maps/JbVYC4BEeMuZjmz69"
                        target="_blank"
                    >
                        800 W Campbell
                        <br></br>
                        ECSW 1.455
                        <br></br>
                        Richardson, Texas 75080
                        <br></br>
                        USA
                    </Link>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Contact</h3>
                        <Link href="mailto:dallasformularacing@gmail.com">
                            Email
                        </Link>
                        <Link href="/contact-us">Send a Message</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Connect</h3>
                        <div className="flex flex-row gap-4">
                            {SOCIAL_MEDIA.map(({ href, icon }) => {
                                return (
                                    <a
                                        href={href}
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        {icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

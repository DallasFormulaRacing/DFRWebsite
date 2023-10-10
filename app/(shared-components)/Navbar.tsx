"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DFRLogo from "@/public/DFR-Logo.png";
import type { MenuProps } from "antd";
import { Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const ICE_LINKS = {
    label: <p>ICE</p>,
    key: "/ice",
    children: [
        {
            label: (
                <a href="/team/ice/aerodynamics" rel="noopener noreferrer">
                    Aerodynamics Team
                </a>
            ),
            key: "/team/ice/aerodynamics",
        },
        {
            label: (
                <a href="/team/business" rel="noopener noreferrer">
                    Business Team
                </a>
            ),
            key: "/team/business",
        },
        {
            label: (
                <a href="/team/ice/chassis" rel="noopener noreferrer">
                    Chassis Team
                </a>
            ),
            key: "/team/ice/chassis",
        },
        {
            label: (
                <a href="/team/ice/electrical" rel="noopener noreferrer">
                    Electrical Team
                </a>
            ),
            key: "/team/ice/electrical",
        },
        {
            label: (
                <a href="/team/ice/embedded" rel="noopener noreferrer">
                    Embedded Team
                </a>
            ),
            key: "/team/ice/embedded",
        },
        {
            label: (
                <a href="/team/ice/ergonomics" rel="noopener noreferrer">
                    Ergonomics Team
                </a>
            ),
            key: "/team/ice/ergonomics",
        },
        {
            label: (
                <a href="/team/ice/manufacturing" rel="noopener noreferrer">
                    Manufacturing Team
                </a>
            ),
            key: "/team/ice/manufacturing",
        },
        {
            label: (
                <a href="/team/ice/powertrain" rel="noopener noreferrer">
                    Powertrain Team
                </a>
            ),
            key: "/team/ice/powertrain",
        },
        {
            label: (
                <a href="/team/ice/software" rel="noopener noreferrer">
                    Software Team
                </a>
            ),
            key: "/team/ice/software",
        },
        {
            label: (
                <a href="/team/ice/steering" rel="noopener noreferrer">
                    Steering Team
                </a>
            ),
            key: "/team/ice/steering",
        },
        {
            label: (
                <a href="/team/ice/suspension" rel="noopener noreferrer">
                    Suspension Team
                </a>
            ),
            key: "/team/ice/suspension",
        },
        {
            label: (
                <a href="/team/officers" rel="noopener noreferrer">
                    Officers
                </a>
            ),
        },
    ],
};
const EV_LINKS = {
    label: <p>EV</p>,
    key: "/ev",
    children: [
        {
            label: (
                <a href="/team/ev/mechanical" rel="noopener noreferrer">
                    EV Mechanical Team
                </a>
            ),
            key: "/team/ev/mechanical",
        },
        {
            label: (
                <a href="/team/ev/electrical" rel="noopener noreferrer">
                    EV Electrical Team
                </a>
            ),
            key: "/team/ev/electrical",
        },
    ],
};
const NAV_LINKS = [
    {
        label: (
            <a href="/about" rel="noopener noreferrer">
                About
            </a>
        ),
        key: "/about",
    },
    {
        label: (
            <a href="/blog" rel="noopener noreferrer">
                News
            </a>
        ),
        key: "/news",
    },
    {
        label: (
            <a href="/cars" rel="noopener noreferrer">
                Cars
            </a>
        ),
        key: "/cars",
    },
    {
        label: <a href="/sponsors">Sponsors</a>,
        key: "/sponsors",
    },
    {
        label: (
            <a href="/contact-us" rel="noopener noreferrer">
                Contact Us
            </a>
        ),
        key: "/contact-us",
    },
];

const items: MenuProps["items"] = [
    getItem(
        <a className={"navbarLink"} href="/join-the-team" rel="noopener noreferrer">
            Team
        </a>,
        "sub1",
        null,
        [ICE_LINKS, EV_LINKS]
    ),
    NAV_LINKS[0],
    NAV_LINKS[1],
    NAV_LINKS[2],
    NAV_LINKS[3],
    NAV_LINKS[4],
    NAV_LINKS[5],
];

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState<boolean>(false);

    return (
        <header className={"mb-0"}>
            <nav className="flex items-center w-full bg-wh-900 text-wh-10 px-10 py-4 navbar">
                <div className="basis-1/6 relative w-auto h-16">
                    <Link href="/" rel="noreferrer">
                        <Image
                            fill
                            alt="logo"
                            placeholder="blur"
                            src={DFRLogo}
                            className="object-contain"
                        />
                    </Link>
                </div>

                <div className="ml-auto w-0 invisible md:min-w-[625px] md:visible">
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        items={items}
                        className="bg-wh-900 flex items-end"
                    />
                </div>

                <div className="block ml-auto md:hidden">
                    <Button
                        type="primary"
                        onClick={() => setNavbarToggle(!navbarToggle)}
                        className="bg-wh-900 text-white"
                    >
                        {navbarToggle ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )}
                    </Button>

                    {navbarToggle && (
                        <Menu
                            mode="inline"
                            theme="dark"
                            items={items}
                            className="bg-wh-900 absolute top-20 right-0 z-[9999] w-full"
                        />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

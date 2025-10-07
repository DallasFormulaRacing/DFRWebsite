"use client";
import DFRLogo from "@/public/DFR-Logo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const IC_LINKS = {
  label: <p>IC</p>,
  key: "/ic",
  children: [
    {
      label: (
        <a href="/team/ic/aerodynamics" rel="noopener noreferrer">
          Aerodynamics Team
        </a>
      ),
      key: "/team/ic/aerodynamics",
    },
    
   /* {
      label: (
        <a href="/team/ic/chassis" rel="noopener noreferrer">
          Chassis Team
        </a>
      ),
      key: "/team/ic/chassis",
    },*/
    {
      label: (
        <a href="/team/ic/composites" rel="noopener noreferrer">
          Composites Team
        </a>
      ),
      key: "/team/ic/composites",
    },
   /* {
      label: (
        <a href="/team/ic/electrical" rel="noopener noreferrer">
          Electrical Team
        </a>
      ),
      key: "/team/ic/electrical",
    },
    {
      label: (
        <a href="/team/ic/embedded" rel="noopener noreferrer">
          Embedded Team
        </a>
      ),
      key: "/team/ic/embedded",
    },*/
    {
      label: (
        <a href="/team/ic/ergonomics" rel="noopener noreferrer">
          Ergonomics Team
        </a>
      ),
      key: "/team/ic/ergonomics",
    },
       {
      label: (
        <a href="/team/ic/manufacturing" rel="noopener noreferrer">
          Manufacturing Team
        </a>
      ),
      key: "/team/ic/manufacturing",
    },
    {
      label: (
        <a href="/team/ic/powertrain" rel="noopener noreferrer">
          Powertrain Team
        </a>
      ),
      key: "/team/ic/powertrain",
    },
    {
      label: (
        <a href="/team/ic/software" rel="noopener noreferrer">
          Software Team
        </a>
      ),
      key: "/team/ic/software",
    },
   /* {
      label: (
        <a href="/team/ic/steering" rel="noopener noreferrer">
          Steering Team
        </a>
      ),
      key: "/team/ic/steering",
    },*/
    {
      label: (
        <a href="/team/ic/suspension" rel="noopener noreferrer">
          Suspension Team
        </a>
      ),
      key: "/team/ic/suspension",
    },
  ],
};
const EV_LINKS = {
  label: <p>EV</p>,
  key: "/ev",
  children: [
    {
      label: (
        <a href="/team/ev/electrical" rel="noopener noreferrer">
          Electrical
        </a>
      ),
      key: "/team/ev/electrical",
    },
    {
      label: (
        <a href="/team/ev/Accumulator" rel="noopener noreferrer">
          Accumulator
        </a>
      ),
      key: "/team/ev/Accumulator",
    },
    {
      label: (
        <a href="/team/ev/packaging" rel="noopener noreferrer">
          Packaging
        </a>
      ),
      key: "/team/ev/packaging",
    },
    {
      label: (
        <a href="/team/ev/powertrain" rel="noopener noreferrer">
          Powertrain
        </a>
      ),
      key: "/team/ev/powertrain",
    },
    /*{
      label: (
        <a href="/team/ev/thermals" rel="noopener noreferrer">
          Thermals
        </a>
      ),
      key: "/team/ev/thermals",
    },*/
  ],
};
const BusinessandAdmin_LINKS = {
  label: <p>Admin</p>,
  key: "/BusinessandAdmin",
  children: [
    {
      label: (
        <a href="/team/ic/business" rel="noopener noreferrer">
          Business Team
        </a>
      ),
      key: "/team/ic/business",
    },
    {
      label: (
        <a href="/team/ic/CreativeMedia" rel="noopener noreferrer">

          Creative Media
        </a>
      ),
      key: "/team/ic/CreativeMedia",
    },
    {
      label: (
        <a href="/team/ic/EventsandLogistics" rel="noopener noreferrer">
          Events and Logistics
        </a>
      ),
      key: "/team/ic/EventsandLogistics",
    },
    {
      label: (
        <a href="/team/ic/Marketing" rel="noopener noreferrer">
          Marketing
        </a>
      ),
      key: "/team/ic/Marketing",
    },
    {
      label: (
        <a href="/team/ic/Treasury" rel="noopener noreferrer">
          Treasury
        </a>
      ),
      key: "/team/ic/Treasury",
    },
    {
      label: (
        <a href="/team/ic/website" rel="noopener noreferrer">
          Website Team
        </a>
      ),
      key: "/team/ic/website",
    }
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
      <a href="/cars" rel="noopener noreferrer">
        Cars
      </a>
    ),
    key: "/cars",
  },
  {
    label: (
      <a href="/gallery" rel="noopener noreferrer">
        Gallery
      </a>
    ),
    key: "/gallery",
  },
/*  {
    label: <a href="/calendar">Calendar</a>,
    key: "/calendar",
  },*/
  {
    label: <a href="/newsletters">Newsletters</a>,
    key: "/newsletters",
  },
  {
    label: <a href="/sponsors">Sponsors</a>,
    key: "/sponsors",
  },
  {
    label: <a href="/Merch">Merch</a>,
    key: "/Merch",
  },
  {
    label: (
      <a href="/team/join-the-team" rel="noopener noreferrer">
        <Button type="primary" className="bg-accent-green rounded-md">
          Join
        </Button>
      </a>
    ),
    key: "/team/join-the-team",
  },
];

const items: MenuProps["items"] = [
  NAV_LINKS[0],
  getItem(
    <p className="navbarLink">Sub Teams</p>,
    "/team/join-the-team",
    null,
    [
      
      {
        label: (
          
          <a href="/team/officers" rel="noopener noreferrer">
            Officers
          </a>
        ),
        key: "/team/officers",
      },
    
      {
        label: (
          <a href="/team/ic/F1Tenth" rel="noopener noreferrer">
            F1 Tenth
          </a>
        ),
        key: "/team/ic/F1Tenth",
      },
      IC_LINKS,
      EV_LINKS,
      BusinessandAdmin_LINKS,

    ],
  ),
  NAV_LINKS[1],
  NAV_LINKS[2],
  NAV_LINKS[3],
  NAV_LINKS[4],
  NAV_LINKS[5],
  NAV_LINKS[6],
];

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState<boolean>(false);

  return (
    <header className={"mb-0"}>
      <nav className="flex items-center w-full bg-wh-900 text-wh-10 px-4 py-4">
        <div className="relative w-64 md:w-112 h-16">
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

        <div className="ml-auto w-0 invisible md:min-w-[825px] md:visible">
          <Menu
            mode="horizontal"
            theme="dark"
            items={items}
            className="bg-wh-900"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </div>

        <div className="block ml-auto md:hidden">
          <Button
            type="primary"
            onClick={() => setNavbarToggle(!navbarToggle)}
            className="bg-wh-900 text-white">
            {navbarToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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

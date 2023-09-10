import React from "react";
import Card from "react-bootstrap/Card";
import { Officer } from "@/app/types";
import Image from "next/image";
import Linkedin from "/public/assets/social_links/linkedin_blue.png";
import Link from "next/link";

type Props = {};

const OfficerCard = ({ officer }: { officer: Officer }) => {
    return (
        <div className={"my-4 flex flex-col justify-center items-center w-[400px]"}>
            <Image
                src={officer.image}
                alt={officer.name}
                width={225}
                height={225}
                style={{ clipPath: "circle()" }}
                className={"mb-4"}
            />
            <div className={"bg-officer-orange card-body text-black z-10 w-1/2"}>
                <h1 className={"card-title text-xl text-center font-bold"}>
                    {officer.name}
                </h1>
                <h2 className={"card-subtitle text-center"}>
                    {officer.positions}
                </h2>
            </div>
            <div className={"my-4"}>
                <p className={"text-center"}>{officer.year}</p>
                <p className={"text-center"}>{officer.major}</p>
                <p className={"text-center"}>{officer.yearsOnTeam}</p>
            </div>
            <div className={""}>
                {officer.linkedin ? (
                    <Link href={officer.linkedin} rel={"noreferrer"}>
                        <Image
                            width={40}
                            height={40}
                            alt={"logo"}
                            placeholder={"blur"}
                            src={Linkedin}
                            style={{ objectFit: "scale-down" }}
                        />
                    </Link>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default OfficerCard;

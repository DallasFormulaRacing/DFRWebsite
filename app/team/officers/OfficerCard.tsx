import React from "react";
import { Officer } from "@/types/types";
import Image from "next/image";
import Linkedin from "/public/assets/social_links/linkedin_blue.png";
import Link from "next/link";
import BlankAvatar from "/public/assets/team/Headshots/blank_avatar.png";
import { Row, Col } from "antd";

type Props = {};

const OfficerCard = ({ officer }: { officer: Officer }) => {
    return (
        <div
            className={
                "my-8 mx-8 col-span-auto flex flex-col justify-end items-center w-[635px] h-[525px]"
            }
        >
            <Image
                src={officer.image ? officer.image : BlankAvatar}
                alt={officer.name}
                width={225}
                height={225}
                // style={{ clipPath: "circle()", objectFit: "cover" }}
                className={"my-4"}
                loading="eager"
                placeholder={"blur"}
                blurDataURL="/assets/team/Headshots/blank_avatar.png"
            />

            <div
                className={
                    "bg-accent-orange-light shadow-lg rounded-xl z-10 w-1/2 text-center h-[400px]"
                }
            >
                <h1
                    className={"card-title text-3xl text-center font-bold mt-2"}
                >
                    {officer.name}
                </h1>
                <h2 className={"card-subtitle text-center text-2xl"}>
                    {officer.positions}
                </h2>
                <div className={"mt-4 text-lg mx-2"}>
                    <Row className="">
                        <Col className="font-bold text-lg">Email: </Col>
                        <Col className="ml-2 text-lg">
                            <a
                                className="text-black underline"
                                href={`mailto:${officer.email}`}
                            >
                                {officer.email}
                            </a>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="font-bold text-lg">Year: </Col>
                        <Col className="ml-2 text-lg">
                            <p>{officer.year}</p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="font-bold text-lg">Major: </Col>
                        <Col className="ml-2 text-lg">
                            <p>{officer.major}</p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="font-bold text-lg">Years on Team: </Col>
                        <Col className="ml-2 text-lg">
                            <p>{officer.yearsOnTeam}</p>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className={"mt-4"}>
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
                    <Image
                        width={40}
                        height={40}
                        alt={"logo"}
                        placeholder={"blur"}
                        src={Linkedin}
                        style={{ objectFit: "scale-down", opacity: 0 }}
                    />
                )}
            </div>
        </div>
    );
};

export default OfficerCard;

import React from "react";
import { Officer } from "@/app/types";
import Image from "next/image";
import style from "@/app/(styles)/OfficerCard.module.css";

type Props = {};


const OfficerCard = ({ officer }: { officer: Officer }) => {
    return (
        <div className={"flex flex-col card w-80"}>
            <figure className={"aspect-auto"}>
                <Image
                    className={"w-full object-cover rounded-lg z-0"}
                    src={officer.image}
                    priority={true}
                    alt={officer.name}
                    fill
                />
            </figure>
            <div className={"bg-accent-orange card-body text-white z-10 rounded-md"}>
                <h2 className={"card-title"}>
                    {officer.name}
                </h2>
                <p>
                    {officer.positions}
                </p>
            </div>
        </div>
    );
}

export default OfficerCard;
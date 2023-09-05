"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import { Officer } from "@/app/types";
import Image from "next/image";

type Props = {};


const OfficerCard = ({ officer }: { officer: Officer }) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={officer.image} />  
        <Card.Body>
            <Card.Title>{officer.name}</Card.Title>
        </Card.Body>
        <div className={"bg-accent-orange card-body text-white z-10 rounded-md"}>
            <h2 className={"card-title"}>
                {officer.name}
            </h2>
            <p>
                {officer.positions}
            </p>
        </div>
    </Card>
    );
}

export default OfficerCard;
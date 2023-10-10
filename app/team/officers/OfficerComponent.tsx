import React from 'react'
import OfficerCard from './OfficerCard';
import { Officer } from '@/app/types';

type Props = {}

const testOfficer: Officer = {
    name: "Test Officer",
    positions: "Test Position",
    year: "1 year",
    major: "Test Major",
    yearsOnTeam: "1 year",
    linkedin: "https://www.linkedin.com/in/kevin-chen-1b1b1b1b1/",
}

const OfficerComponent = (props: Props) => {
  return (
    <div className={"w-3/4"}>
        <h1 className={"text-4xl font-bold text-center my-10"}>Admins</h1>
        <div className={"officerCards"}>
            <OfficerCard officer={testOfficer} />
            <OfficerCard officer={testOfficer} />
            <OfficerCard officer={testOfficer} />
            <OfficerCard officer={testOfficer} />
            <OfficerCard officer={testOfficer} />
            <OfficerCard officer={testOfficer} />
        </div>
    </div>
  )
}

export default OfficerComponent
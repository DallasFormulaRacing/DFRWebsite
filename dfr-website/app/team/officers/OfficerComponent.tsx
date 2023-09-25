import React from 'react'
import OfficerCard from './OfficerCard';

type Props = {}

const testOfficer = {
    name: "Test Officer",
    positions: "Test Position",
    image: "/assets/team/Headshots/Derek Fuhr.png",
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
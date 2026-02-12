"use client";
import Link from "next/link";

const FORM_URL = 'https://forms.office.com/r/EACF3H7WbV';
const WHEN2MEET_URL = 'https://www.when2meet.com/?34974688-bTXd4';
const BUSINESS_FORM_URL = 'https://docs.google.com/forms/d/1A7eQ6ZpAQxi-2UpL4BIhciA5miw4H8BkI8XNTGJuXhU/edit?ts=698a58e2';
const HARDWARE_FORM_URL = 'https://forms.office.com/r/83K3VQ16yT';
const Software_URL = 'https://software.dallasformularacing.com/onboarding/onboarding-project/';
interface Team {
  name: string;
  image: string;
  category: string;
}

const teams: Team[] = [
  { name: 'Software', image: '/gallery/24mainsponsors.jpg', category: 'IC' },
  { name: 'Business', image: '/gallery/24mainsponsors.jpg', category: 'Admin' },
  { name: 'Hardware,Electrical and Firmware', image: '/gallery/24endurance.jpg', category: 'EV' },
  { name: 'Website', image: '/gallery/24mainsponsors.jpg', category: 'Admin' },
];

export default function Page() {
  return (
    <main className="tracking-wide min-h-screen bg-[#2f3136] text-white p-8 py-16">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Apply to a Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Open
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-3 text-center">{team.name}</h3>
                <Link href={
                  team.name === 'Website' ? WHEN2MEET_URL : 
                  team.name === 'Business' ? BUSINESS_FORM_URL : 
                  team.name === 'Software' ? Software_URL :
                  team.name === 'Hardware,Electrical and Firmware' ? HARDWARE_FORM_URL : 
                  FORM_URL
                } target="_blank" rel="noopener noreferrer">
                  <button className="block w-full text-center font-bold py-2 px-4 rounded-lg transition-colors duration-200 bg-accent-orange hover:bg-orange-600 text-white">
                    Apply Here
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

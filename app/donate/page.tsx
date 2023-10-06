import Link from "next/link";
import Image from "next/image";
import { QRCode, Space } from "antd";
import VenmoLogo from "@/public/venmo-logo.png"

const VENMO_LINK = "https://venmo.com/u/DFRacing";
const UTD_DONATION_LINK = "https://giving.utdallas.edu/";

// TODO: Update Venmo Link
// TODO: Update UTD Donation Steps

export default function Page() {
    return (
        <main className="min-h-full bg-wh-900 flex flex-col justify-center items-center text-white p-4 md:px-48">
            <h1 className="text-5xl sm:text-8xl font-bold text-center">
                Donating
            </h1>

            <div className="my-16 text-center">
                <h2 className="text-2xl font-bold">
                    When donating through the University please complete the
                    following:
                </h2>
                <ol className="list-decimal text-2xl px-8 py-8 text-left">
                    <li>
                        Visit{" "}
                        <span className="text-accent-orange">
                            giving.utdallas.edu
                        </span>
                    </li>
                    <li>Select Designation: Other</li>
                    <li>
                        In the Comment Section write: 2022 Dallas Formula Racing
                        Club donation
                    </li>
                </ol>

                <Link
                    href={UTD_DONATION_LINK}
                    target="_blank"
                    className="text-2xl text-accent-orange underline w-full text-center"
                >
                    click here to donate
                </Link>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-center">
                Or donate directly to us through Venmo
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
                <div className="bg-white">
                    <QRCode value={VENMO_LINK} />
                </div>
                <div className="flex flex-col justify-center">
                    <Image src={VenmoLogo} alt="Venmo logo" width={400} />
                    <p className="text-2xl font-bold text-center mt-2">Scan to open Venmo and Donate</p>
                </div>
            </div>
        </main>
    );
}

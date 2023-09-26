import React from "react";
import Link from "next/link";

type Props = {};

export const AboutUs = (props: Props) => {
    return (
        <main className="px-0 leading-7 py-24">
            <section>
                <div className="flex flex-col justify-center items-center min-h-[500px] p-4">
                    <h1 className="text-5xl font-bold">
                        About Us
                    </h1>
                    <div className="my-8 text-center flex flex-col items-center">
                        <p className="text-2xl my-4 md:w-4/5 md:text-3xl">
                            Dallas Formula Racing is a student-led orginization at
                            the University of Texas at Dallas. Our team was founded
                            in 2014 and has successfully built 3 formula style
                            vehicles for the Formula SAE competition. The diverse
                            array of projects on our team results in student
                            collaboration among 4 different schools at UT Dallas.
                        </p>
                        <p className="text-2xl my-4 md:w-4/5 md:text-3xl">
                            We are commited to sharing our passion for engineering
                            and math with young minds. We volunteer at STEM fairs in
                            the DFW aera to encourage new students to take on
                            similar path by leavin a lasting impresssion on the
                            future generation of innovators by demonstarting various
                            STEM applications through our diverse group.
                        </p>
                    </div>
                    <Link href="/about-us">
                        <button 
                            className="bg-accent-green text-wh-0 text-lg font-semibold w-40 h-12 rounded-md mt-8"
                        >
                            Learn More
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;

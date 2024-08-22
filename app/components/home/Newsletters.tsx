import NewsletterArchive from "@/data/Newsletters.json";
import UTDSAELogo from "@/public/dfr-sae.png";
import Image from "next/image";
import Link from "next/link";

export default function NewslettersPreview() {
    return (
        <div className="w-full">
            <section className="px-8 md:px-24 py-10">
                <h1 className="text-6xl font-extrabold text-[#045295] mb-20">
                    Newsletters
                </h1>
                <div className="flex flex-wrap justify-evenly gap-24">
                    {NewsletterArchive.slice(0, 3).map((newsletter, index) => (
                        <article
                            key={index}
                            className="bg-white shadow-lg w-[20rem] md:w-[36rem] min-h-[24rem] rounded-lg overflow-hidden flex flex-col"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={newsletter.previewImage}
                                    alt={newsletter.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gray-200"
                                />
                            </div>
                            <div className="border-t border-gray-200 p-6 flex-grow">
                                <h2 className="text-xl font-semibold mb-2 text-center break-words">
                                    {newsletter.title}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4 text-center">
                                    {newsletter.date}
                                </p>
                                <Link
                                    href={newsletter.url}
                                    target="_blank"
                                    className="text-blue-600 hover:underline block text-center mt-auto"
                                >
                                    Read More
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <Link href="/newsletters">
                    <button className="bg-[#E87500] text-wh-0 text-lg font-semibold min-w-[10rem] rounded-md p-4 mt-20">
                        Read More
                    </button>
                </Link>
            </section>
        </div>
    );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const merchItems = [
  {
    name: "IC T-Shirt",
    description: "Comfortable cotton shirt",
    price: "$20",
    img: "/dfr-logo-tyre.png",
    link: "https://forms.gle/GDXg7cEXr1X5rvBN6",
  },
  {
    name: "EV T-Shirt",
    description: "Comfortable cotton shirt",
    price: "$20",
    img: "/dfr-logo-tyre.png",
    link: "https://forms.gle/GDXg7cEXr1X5rvBN6",
  },
  {
    name: "Crewneck",
    description: "Warm and stylish crewneck for cold race days",
    price: "$35",
    img: "/dfr-logo-tyre.png",
    link: "https://forms.gle/GDXg7cEXr1X5rvBN6",
  },
  {
    name: "More to come soon!!!",
    description: "",
    price: "",
    img: "/dfr-logo-tyre.png",
    link: "https://forms.gle/GDXg7cEXr1X5rvBN6",
  }
];

export default function MerchGrid() {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div className="bg-white py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Merch</h1>

      <div className="text-center mb-6">
        <h2
          className="text-3xl font-semibold cursor-pointer inline-block hover:text-orange-600 transition"
          onClick={() => setShowFAQ(!showFAQ)}
        >
          Purchase/Pick Up Instructions {showFAQ ? "▲" : "▼"}
        </h2>
      </div>

      {showFAQ && (
       <div className="max-w-6xl mx-auto mb-12 px-6 text-left text-gray-800 bg-orange-100 border-l-4 border-orange-500 p-8 rounded-xl space-y-6 text-lg leading-relaxed">
          <div>
            <strong>How do I know when my item is ready for pick-up?</strong>
            <p>
              You will receive an email regarding the status of your order alongside times our treasurers or other team member can assist with giving you your order.
            </p>
          </div>
          <div>
            <strong>Who can I contact for questions?</strong>
            <p>
              Our treasurers will be your main source of communication regarding any orders or payments.
            </p>
            <ul className="pl-4 list-disc">
              <li>Alondra Lopez | 682-702-9339 | Asl230003@utdallas.edu | Discord: alondra_0407</li>
              <li>Keven Diaz | 214-407-3935 | Keven.diaz@utdallas.edu | Discord: kevendiaz</li>
            </ul>
          </div>
          <div>
            <strong>Payment options?</strong>
            <p>
              Card payment is preferred but cash and Zelle are also accepted. <br />
              <strong>Reminder:</strong> Payment is required at the time or prior to pick up.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {merchItems.map((item, index) => (
          <motion.div
            key={index}
            className="border-2 border-orange-500 rounded-lg p-6 flex flex-col items-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-52 h-52 rounded-full border-4 border-orange-500 overflow-hidden mb-4">
              <Image
                src={item.img}
                alt={item.name}
                width={208}
                height={208}
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
            <p className="text-gray-600 mb-2 text-center">{item.description}</p>
            <span className="font-bold text-black-600 text-lg mb-4">{item.price}</span>
            <Link
              href={item.link}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Buy Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import LeadsClient from "./LeadsClient";

export const metadata: Metadata = {
  title: "Dallas Formula Racing - Leads",
  description:
    "Meet the lead members of Dallas Formula Racing across Admin, IC, EV, Business, and F1 Tenth.",
};

export default function LeadsPage() {
  return <LeadsClient />;
}

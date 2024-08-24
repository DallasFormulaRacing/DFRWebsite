import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TeamMajors from "@/data/TeamMajorsData.json";

const Demographics = () => {
  return (
    <div className="" suppressHydrationWarning={true}>
      <ResponsiveContainer width="100%" height="100%">
        <div className="">
          <h3 className="ml-20 text-2xl font-bold my-4 text-primary">Majors</h3>
          <BarChart
            width={480}
            height={300}
            data={TeamMajors}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            className="my-4"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Major" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Amount" fill="#2D8B49">
              {TeamMajors.map((entry, index) => (
                <Cell cursor="pointer" key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Demographics;

import React, { use } from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const ResultChart = ({ marksPromise }) => {
  const marksData = use(marksPromise);
  return (
    <div className="flex flex-col items-center gap-10">
      <h3 className="text-2xl mt-10 text-center font-bold">
        Students Marks LineChart
      </h3>
      <LineChart
        className="w-[90%] mx-auto"
        height={500}
        responsive
        data={marksData}
      >
        <CartesianGrid />
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Line dataKey={"physics"} stroke="red" />
        <Line dataKey={"chemistry"} stroke="green" />
        <Line dataKey={"math"} stroke="blue" />
        <Legend />
        <RechartsDevtools />
      </LineChart>
    </div>
  );
};

export default ResultChart;

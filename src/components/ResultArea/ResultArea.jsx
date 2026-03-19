import React, { use } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ResultArea = ({ resultAreaPromise }) => {
  const resultResponse = use(resultAreaPromise);
  const marksData = resultResponse.data;
  return (
    <div className="flex flex-col items-center gap-10">
      <h3 className="text-2xl mt-10 text-center font-bold">
        Students Marks Area Chart
      </h3>
      <AreaChart
        className="w-[90%] mx-auto"
        height={500}
        responsive
        data={marksData}
      >
        <CartesianGrid />
        <XAxis dataKey="name" niceTicks="snap125" />
        <YAxis niceTicks="snap125" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="physics"
          stroke="#3498db"
          fill="#3498db"
        />
        <Area
          type="monotone"
          dataKey="chemistry"
          stroke="#9b59b6"
          fill="#9b59b6"
        />
        <Area type="monotone" dataKey="math" stroke="#2ecc71" fill="#2ecc71" />
        <Legend />
      </AreaChart>
    </div>
  );
};

export default ResultArea;

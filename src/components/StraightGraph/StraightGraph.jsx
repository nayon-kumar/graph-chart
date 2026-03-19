import { RechartsDevtools } from "@recharts/devtools";
import React, { use } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const StraightGraph = ({ straightPromise }) => {
  const straightDataRes = use(straightPromise);
  const data = straightDataRes.data;
  return (
    <div>
      <h3 className="text-2xl mt-10 -mb-20 text-center font-bold">
        Straight Angle Pie Chart
      </h3>
      <PieChart className="w-[90%] mx-auto" height={500} responsive>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="100%"
          outerRadius="120%"
          fill="#8884d8"
          label
          isAnimationActive={true}
        />
        <Tooltip />
        <RechartsDevtools />
      </PieChart>
    </div>
  );
};

export default StraightGraph;

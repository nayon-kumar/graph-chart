import React, { use } from "react";
import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts";

const MarksChart = ({ allMarksPromise }) => {
  const marksRes = use(allMarksPromise);
  const marks = marksRes.data;

  //   Data processing for chart
  const finalData = marks.map((mark) => {
    const student = {
      id: mark.id,
      name: mark.name,
      physics: mark.marks.physics,
      chemistry: mark.marks.chemistry,
      math: mark.marks.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = Math.round(avg);
    return student;
  });

  return (
    <div>
      <h3 className="text-2xl my-10 text-center font-bold">
        Students Marks BarChart
      </h3>
      <BarChart
        responsive
        className="mx-auto w-[90%]"
        height={500}
        data={finalData}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="avg" fill="red" />
        <Bar dataKey="physics" fill="green" />
        <Bar dataKey="chemistry" fill="blue" />
        <Bar dataKey="math" fill="purple" />
        <Legend />
      </BarChart>
    </div>
  );
};

export default MarksChart;

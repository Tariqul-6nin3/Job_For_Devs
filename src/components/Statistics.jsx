import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { assignment: 1, score: 56 },
    { assignment: 2, score: 34 },
    { assignment: 3, score: 42 },
    { assignment: 4, score: 49 },
    { assignment: 5, score: 22 },
    { assignment: 6, score: 51 },
    { assignment: 7, score: 39 },
    { assignment: 8, score: 46 },
  ];

  return (
    <div className="w-10/12 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-[calc(100vh-100px)]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="assignment" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="score"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="score" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="score" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;

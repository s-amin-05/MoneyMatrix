// Graph.jsx
import React from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ data }) => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Graph;

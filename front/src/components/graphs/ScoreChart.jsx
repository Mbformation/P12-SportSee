import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

import PropTypes from 'prop-types';



export default function ScoreChart(props) {
  const data = [
    {
      name: "maxScore",
      score: 100,
      fill: "#FFFFFF"
    },
    {
      name: "currentScore",
      score: props.data,
      fill: "#FF0000"
    }
  ];
  const renderLegend = (data) => {
    return (
      <div className="legend-container">
        <div className="legend">
          <span className="legend-data" style={{ color: "#282D30", fontSize: "24px", fontWeight: "bold" }}>
            {`${props.data}%`}
          </span>
          <br /> 
          de votre objectif
        </div>
      </div>
    )}
  return (
    <div className="radial-chart-container">
      <div className="title">Score</div>
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <RadialBarChart
            innerRadius={75}
            outerRadius={90}
            startAngle={180} 
            endAngle={-180}
            barCategoryGap={-1}
            data={data}
            >
            <RadialBar
                clockWise
                dataKey="score"
                cornerRadius='50%'
            />
            <Legend content={renderLegend} verticalAlign="middle"/>
            </RadialBarChart>
        </ResponsiveContainer>
    </div>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.number.isRequired
};
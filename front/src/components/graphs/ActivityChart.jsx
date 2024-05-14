import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import PropTypes from 'prop-types';

export default function ActivityChart(props) {
  const customXaxisContent = (value, index) => {
    return index + 1;
  }

  const customLegendContent = () => {
    return (
      <div className="legend-container" style={{ marginBottom: '55px' }}>
        <p>Activité quotidienne</p>
        <ul>
          <li className="legend-item-weight">Poids (Kg)</li>
          <li className="legend-item-calories">Calories brûlées (kCal)</li>
        </ul>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ fontSize: '12px', backgroundColor: '#E60000', color: 'white', padding: '5px'}}>
          <p>{`${payload[0].value}.kg`}</p>
          <p>{`${payload[1].value}.Kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={props.data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }} >
          <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
          <XAxis dataKey="index" tickLine={false} axisLine={{ stroke: '#DEDEDE', strokeWidth: 1 }} tickMargin={15} tick={{ fontSize: '14px', fill: '#9B9EAC' }} tickFormatter={customXaxisContent} />
          <YAxis orientation="right" tickLine={false} axisLine={false} tickMargin={25} tick={{ fontSize: '14px', fill: '#9B9EAC' }}/>
          <Tooltip animationEasing="ease-out" offset={40} wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />
          <Legend verticalAlign="top" content={customLegendContent} />
          <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={8} />
          <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
      data: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string.isRequired,
          calories: PropTypes.number.isRequired,
          kilogram: PropTypes.number.isRequired,
        })
      ).isRequired
};
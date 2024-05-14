import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import PropTypes from 'prop-types';


export default function SessionsChart(props) {
  const customLegendContent = () => {
    return (
    <div className="legend-container" style={{ marginBottom: '20px' }}>
        <p style={{color: '#FFFFFF', opacity: '0.7', lineHeight: "1.8rem", margin: '0'}}>Durée moyenne des <br />sessions</p>
      </div>
    )
  };

  const customTicks = (value) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const index = value - 1; 
    return days[index] || '';
    };

    const customTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip" style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'white', color: '#000000', padding: '2px'}}>
            <p style={{paddingLeft: '5px', paddingRight: '5px'}}>{`${payload[0].value} min`}</p>
          </div>
        );
      }
    
      return null;
    };
  
  return (
    <div className="line-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={props.data} margin={{ top: 15, right: 10, left: 10, bottom: 40 }}>
          <CartesianGrid horizontal={false} vertical={false}  />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={20} tickFormatter={customTicks} tick={{ stroke: '#FFFFFF', opacity: '0.4', fontSize: '14px', fontWeight: '100' }}  />
          <Legend verticalAlign="top" content={customLegendContent} />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
          </defs>

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke={`url(#gradient)`} 
            strokeWidth={2}
            dot={false}
            activeDot={{fill: '#FFFFFF', r: 3 }}
          />


          <Tooltip cursor={false} content={customTooltip}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired
};
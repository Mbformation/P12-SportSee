import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import translateSubject from '../../utils/translate.js';
import { translation } from '../../translation/fr.js';
import PropTypes from 'prop-types';

export default function PerformanceChart(props) {
  const ticksList = translateSubject(props.data, translation)
  const ticksOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
  const sortedTicks = sortTicks(ticksList, ticksOrder);
    return (
    <div className='radar-chart-container'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart margin={{ top: 10, right: 30, bottom: 10, left: 30 }} data={sortedTicks}>
          <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 60, 80]}/>
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 13 }}/>
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    )
}


function sortTicks(data, desiredOrder) {
  return data.sort((a, b) => desiredOrder.indexOf(a.subject) - desiredOrder.indexOf(b.subject));
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ).isRequired
};
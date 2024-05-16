import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import translateSubject from "../../utils/translate.js";
import { translation } from "../../translation/fr.js";
import PropTypes from "prop-types";

// PerformanceChart est un diagramme recharts de type radar
export default function PerformanceChart(props) {
  const ticksList = translateSubject(props.data, translation); // traduction des props en français
  console.log(props.data);
  console.log(ticksList);
  const ticksOrder = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ]; // définition de l'ordre souhaité
  const sortedTicks = sortTicks(ticksList, ticksOrder); // ordonner le tableau en fonction de l'ordre souhaite

  // Propriétés recharts pour le style du diagramme et exécution des fonctions custom
  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
          data={sortedTicks}
        >
          <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 60, 80]} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#FFFFFF", fontSize: 13 }}
          />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Tri des ticks en fonction de l'ordre sur tableau ticksOrder
function sortTicks(data, desiredOrder) {
  return data.sort(
    (a, b) => desiredOrder.indexOf(a.subject) - desiredOrder.indexOf(b.subject)
  );
}

// PropTypes pour le diagramme avec détail des données reçues obligatoires
PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ).isRequired,
};

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

import PropTypes from 'prop-types';


// ScoreChart est un diagramme recharts de type radial bar chart
// Affiche le score moyen de l'utilisateur

export default function ScoreChart(props) {
  // reçoit en props un chiffre qui est le score moyen de l'utilisateur

  // Dans le tableau d'objets data on trouve :
  // un objet factice caché "maxScore" sert de référence pour le pourcentage
  // l'object "currentScore" contient les données à afficher
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
  // Affiche la légende au centre, un pourcentage représentant le score moyen de l'utilisateur
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
    )
  }
  // Propriétés recharts pour le style du diagramme et exécution des fonctions custom
  return (
    <div className="radial-chart-container">
      <div className="title">Score</div>
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <RadialBarChart innerRadius={75} outerRadius={90} startAngle={180} endAngle={-180} barCategoryGap={-1} data={data}>
              <RadialBar clockWise dataKey="score" cornerRadius='50%'/>
              <Legend content={renderLegend} verticalAlign="middle"/>
            </RadialBarChart>
        </ResponsiveContainer>
    </div>
  );
}

// PropTypes pour le diagramme avec détail des données reçues obligatoires
ScoreChart.propTypes = {
  data: PropTypes.number.isRequired
};
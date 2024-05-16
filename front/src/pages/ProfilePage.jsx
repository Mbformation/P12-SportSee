import { useLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { formatUserInfo } from "../utils/formatUserInfo.js";
import formatPerformance from "../utils/formatPerformance.js";
import ActivityChart from "../components/graphs/ActivityChart.jsx";
import SessionsChart from "../components/graphs/SessionsChart.jsx";
import PerformanceChart from "../components/graphs/PerformanceChart.jsx";
import ScoreChart from "../components/graphs/ScoreChart.jsx";
import KeyData from "../components/KeyData.jsx";
import energy from "../assets/icons/energy.svg";
import protein from "../assets/icons/protein.svg";
import carbs from "../assets/icons/carbs.svg";
import fat from "../assets/icons/fat.svg";
export default function ProfilePage() {
  const userData = formatUserInfo(useOutletContext().userData[0].data);
  const userScore = userData.score * 100;
  const graphData = useLoaderData();
  const userPerformance = formatPerformance(graphData[2]);
  return (
    <div className="profile">
      <h1 className="title">
        Bonjour{" "}
        <span className="title-name">{userData.userInfos.firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="stats-container">
        <div className="graphs-container">
          <ActivityChart data={graphData[0].data.sessions} />
          <div className="cubic-charts-container">
            <SessionsChart data={graphData[1].data.sessions} />
            <PerformanceChart data={userPerformance} />
            <ScoreChart data={userScore} />
          </div>
        </div>
        <div className="food-kpis-container">
          <KeyData
            icon={energy}
            name="Calories"
            KeyData={`${userData.keyData.calorieCount}kCal`}
          />
          <KeyData
            icon={protein}
            name="Protéines"
            KeyData={`${userData.keyData.proteinCount}g`}
          />
          <KeyData
            icon={carbs}
            name="Glucides"
            KeyData={`${userData.keyData.carbohydrateCount}g`}
          />
          <KeyData
            icon={fat}
            name="Lipides"
            KeyData={`${userData.keyData.lipidCount}g`}
          />
        </div>
      </div>
    </div>
  );
}

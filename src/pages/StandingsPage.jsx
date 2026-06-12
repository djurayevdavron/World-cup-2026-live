import Navbar from "../components/layout/Navbar";
import GroupTable from "../components/standings/GroupTable";
import BestThirdTeams from "../components/standings/BestThirdTeams";

import { matches } from "../data/matchesData";
import { groups } from "../data/groupsData";

import { calculateStandings } from "../lib/calculateStandings";
import { calculateBestThirdTeams } from "../lib/calculateBestThirdTeams";
import { useTranslation } from "react-i18next";

function StandingsPage() {
  const { t } = useTranslation();
  const allStandings = {};

  Object.entries(groups).forEach(([groupName, teams]) => {
    allStandings[groupName] = calculateStandings(matches, teams);
  });

  const bestThirdTeams = calculateBestThirdTeams(allStandings);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-10">
          {t("standingsPage.title")}
        </h1>
        <div className="space-y-8">
          {Object.entries(groups).map(([groupName, teams]) => (
            <GroupTable
              key={groupName}
              groupName={`${t("standingsPage.group")} ${groupName}`}
              teams={allStandings[groupName]}
            />
          ))}

          <BestThirdTeams teams={bestThirdTeams} />
        </div>
      </div>
    </div>
  );
}
export default StandingsPage;

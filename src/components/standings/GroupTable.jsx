import { getFlag } from "../../lib/teamFlags";
import { useTranslation } from "react-i18next";

function GroupTable({ groupName, teams }) {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-white">{groupName}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-white">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="p-4 text-left">{t("table.team")}</th>

              <th className="p-4 text-center">{t("table.played")}</th>

              <th className="p-4 text-center">{t("table.won")}</th>

              <th className="p-4 text-center">{t("table.draw")}</th>

              <th className="p-4 text-center">{t("table.lost")}</th>

              <th className="p-4 text-center">{t("table.gf")}</th>

              <th className="p-4 text-center">{t("table.ga")}</th>

              <th className="p-4 text-center">{t("table.gd")}</th>

              <th className="p-4 text-center">{t("table.points")}</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr
                key={team.name}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="p-4 font-medium min-w-[180px]">
                  <div className="flex items-center gap-3">
                    <img
                      src={getFlag(team.name)}
                      alt={team.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />

                    <span>
                      {index + 1}. {team.name}
                    </span>
                  </div>
                </td>

                <td className="p-4 text-center">{team.played}</td>
                <td className="p-4 text-center">{team.won}</td>
                <td className="p-4 text-center">{team.draw}</td>
                <td className="p-4 text-center">{team.lost}</td>
                <td className="p-4 text-center">{team.gf}</td>
                <td className="p-4 text-center">{team.ga}</td>

                <td className="p-4 text-center">
                  {team.gd > 0 ? `+${team.gd}` : team.gd}
                </td>

                <td className="p-4 text-center font-bold text-yellow-400">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupTable;

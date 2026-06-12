import { useTranslation } from "react-i18next";

function BestThirdTeams({ teams }) {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-white">
          {t("bestThird.title")}
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-white">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="p-4 text-left">#</th>

              <th className="p-4 text-left">{t("table.team")}</th>

              <th className="p-4 text-center">{t("table.group")}</th>

              <th className="p-4 text-center">{t("table.played")}</th>

              <th className="p-4 text-center">{t("table.gf")}</th>

              <th className="p-4 text-center">{t("table.ga")}</th>

              <th className="p-4 text-center">{t("table.gd")}</th>

              <th className="p-4 text-center">{t("table.points")}</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr
                key={`${team.group}-${team.name}`}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="p-4">{index + 1}</td>

                <td className="p-4 font-medium">{team.name}</td>

                <td className="p-4 text-center">{team.group}</td>

                <td className="p-4 text-center">{team.played}</td>

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

export default BestThirdTeams;

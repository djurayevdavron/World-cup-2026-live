import Navbar from "../components/layout/Navbar";
import { matches } from "../data/matchesData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MatchesPage() {
  const { t } = useTranslation();
  const nextMatch = matches
    .filter((match) => match.status === "upcoming")
    .sort(
      (a, b) =>
        new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`),
    )[0];

  const lastFinishedMatch = [...matches]
    .filter((match) => match.status === "finished")
    .reverse()[0];

  const upcomingMatches = matches
    .filter((match) => match.status === "upcoming")
    .sort(
      (a, b) =>
        new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`),
    );

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-10">
          {t("matchesPage.title")}
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* NEXT MATCH */}
          {nextMatch && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300">
              <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                {t("matchesPage.nextMatch")}
              </span>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center text-center gap-2 md:gap-4">
                <div>
                  <img
                    src={nextMatch.homeFlag}
                    alt={nextMatch.homeTeam}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-4"
                  />

                  <h3 className="text-white font-bold text-sm sm:text-base md:text-2xl leading-tight break-words">
                    {nextMatch.homeTeam}
                  </h3>
                </div>

                <div>
                  <p className="text-yellow-400 text-4xl md:text-5xl font-bold">
                    VS
                  </p>
                </div>

                <div>
                  <img
                    src={nextMatch.awayFlag}
                    alt={nextMatch.awayTeam}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-4"
                  />

                  <h3 className="text-white font-bold text-lg md:text-2xl">
                    {nextMatch.awayTeam}
                  </h3>
                </div>
              </div>

              <p className="text-center text-slate-400 mt-8 text-sm md:text-lg">
                {new Date(nextMatch.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                • {nextMatch.time}
              </p>
              <div className="mt-6 text-center">
                <Link
                  to={`/live/${nextMatch.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition"
                >
                  {t("matchesPage.watchMatch")}
                </Link>
              </div>
            </div>
          )}

          {/* LAST FINISHED MATCH */}
          {lastFinishedMatch && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300">
              <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                {t("matchesPage.finished")}
              </span>

              <div className="grid grid-cols-3 items-center text-center gap-4">
                <div>
                  <img
                    src={lastFinishedMatch.homeFlag}
                    alt={lastFinishedMatch.homeTeam}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-4"
                  />

                  <h3 className="text-white font-bold text-lg md:text-2xl">
                    {lastFinishedMatch.homeTeam}
                  </h3>
                </div>

                <div className="flex justify-center items-center">
                  <p className="text-yellow-400 text-5xl md:text-7xl font-bold whitespace-nowrap">
                    {lastFinishedMatch.homeScore}-{lastFinishedMatch.awayScore}
                  </p>
                </div>

                <div>
                  <img
                    src={lastFinishedMatch.awayFlag}
                    alt={lastFinishedMatch.awayTeam}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-4"
                  />

                  <h3 className="text-white font-bold text-lg md:text-2xl">
                    {lastFinishedMatch.awayTeam}
                  </h3>
                </div>
              </div>

              <p className="text-center text-slate-400 mt-8 text-lg">
                {t("matchesPage.fullTime")}
              </p>
            </div>
          )}
        </div>

        {/* UPCOMING MATCHES */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("matchesPage.upcomingMatches")}
          </h2>

          <div className="space-y-3">
            {upcomingMatches.slice(0, 10).map((match) => (
              <div
                key={match.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-yellow-400 transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">
                      {t("matchesPage.group")} {match.group}
                    </p>

                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={match.homeFlag}
                          alt={match.homeTeam}
                          className="w-8 h-8 object-contain"
                        />

                        <span className="text-white font-semibold">
                          {match.homeTeam}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <img
                          src={match.awayFlag}
                          alt={match.awayTeam}
                          className="w-8 h-8 object-contain"
                        />

                        <span className="text-white font-semibold">
                          {match.awayTeam}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="mt-4 flex justify-end">
                      <Link
                        to={`/live/${match.id}`}
                        className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
                      >
                        {t("matchesPage.open")}
                      </Link>
                    </div>
                    <p className="text-yellow-400 font-semibold whitespace-nowrap">
                      {new Date(match.date).toLocaleDateString("en-GB")}
                    </p>

                    <p className="text-slate-400">{match.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchesPage;

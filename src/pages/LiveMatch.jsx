import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { matches } from "../data/matchesData";
import { useTranslation } from "react-i18next";

function LiveMatch() {
  const { t } = useTranslation();
  const { id } = useParams();

  const match = matches.find((match) => match.id === Number(id));

  if (!match) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Match not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Match title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {match.homeTeam} vs {match.awayTeam}
          </h1>

          <p className="text-slate-400 mt-3 text-lg">Group {match.group}</p>
        </div>

        {/* TV Frame */}
        <div
          className="
          bg-slate-900
          rounded-[25px]
          sm:rounded-[40px]

          p-4
          sm:p-6

          border-4
          border-slate-700

          shadow-2xl
          "
        >
          {/* TV Screen */}
          <div
            className="
            bg-black

            w-full

            h-[220px]
            sm:h-[320px]
            md:h-[420px]
            lg:h-[520px]

            rounded-3xl

            flex
            flex-col
            items-center
            justify-center

            relative

            px-4
            text-center
            "
          >
            {/* LIVE Badge */}
            <div className="absolute top-4 left-4">
              <span
                className="
                bg-red-600
                text-white

                text-sm
                sm:text-base

                px-3
                py-1

                rounded-full
                font-bold

                animate-pulse
                "
              >
                 LIVE
              </span>
            </div>

            {/* Title */}
            <h2
              className="
              text-white

              text-xl
              sm:text-3xl
              md:text-5xl

              font-bold

              mb-4
              "
            >
              {t("liveStream")}
            </h2>

            {/* Status */}
            <p
              className="
              text-slate-400

              text-sm
              sm:text-lg

              mb-8

              max-w-md
              "
            >
              {match.stream ? t("streamAvailable") : t("streamUnavailable")}
            </p>

            {/* Button */}
            {match.stream ? (
              <a
                href={match.stream}
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-yellow-400

                text-black
                font-bold

                px-6
                py-3

                sm:px-8
                sm:py-4

                rounded-2xl

                hover:bg-yellow-300
                transition

                text-lg
                "
              >
                {t("watchLive")}
              </a>
            ) : (
              <button
                disabled
                className="
                bg-slate-700

                text-slate-400
                font-bold

                px-6
                py-3

                sm:px-8
                sm:py-4

                rounded-2xl

                cursor-not-allowed

                text-lg
                "
              >
                {t("comingSoon")}
              </button>
            )}
          </div>

          {/* TV Stand - faqat desktop va katta ekranlarda */}
          <div className="hidden sm:block">
            <div className="flex justify-center mt-4">
              <div className="w-32 h-3 bg-slate-700 rounded-full"></div>
            </div>

            <div className="flex justify-center">
              <div className="w-16 h-10 bg-slate-700 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LiveMatch;

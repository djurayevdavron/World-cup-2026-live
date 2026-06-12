import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Countdown() {
  const { t } = useTranslation();
  const targetDate = new Date("July 20, 2026 00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Host countries */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
          <img
            src="/flags/usa.png"
            alt="USA"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-white font-medium">USA</span>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
          <img
            src="/flags/canada.png"
            alt="Canada"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-white font-medium">Canada</span>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
          <img
            src="/flags/mexico.png"
            alt="Mexico"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-white font-medium">Mexico</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-3">
        {t("countdown.title")}
      </h2>

      <p className="text-yellow-400 text-xl md:text-2xl text-center mb-2">
        {t("countdown.subtitle")}
      </p>

      <p className="text-center text-slate-400 mb-12">July 20, 2026</p>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-8
            text-center
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <p className="text-5xl md:text-6xl font-bold text-yellow-400">
            {timeLeft.days}
          </p>
          <p className="text-slate-400 mt-3 text-lg">{t("countdown.days")}</p>
        </div>

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-8
            text-center
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <p className="text-5xl md:text-6xl font-bold text-yellow-400">
            {timeLeft.hours}
          </p>
          <p className="text-slate-400 mt-3 text-lg">{t("countdown.hours")}</p>
        </div>

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-8
            text-center
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <p className="text-5xl md:text-6xl font-bold text-yellow-400">
            {timeLeft.minutes}
          </p>
          <p className="text-slate-400 mt-3 text-lg">
            {t("countdown.minutes")}
          </p>
        </div>

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-8
            text-center
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <p className="text-5xl md:text-6xl font-bold text-yellow-400">
            {timeLeft.seconds}
          </p>
          <p className="text-slate-400 mt-3 text-lg">
            {t("countdown.seconds")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;

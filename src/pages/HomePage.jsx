import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import Countdown from "../components/countdown/Countdown";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl text-white font-bold mb-8">
          {t("homePage.title")}
        </h1>

        <Countdown />
      </div>
    </div>
  );
}

export default Home;

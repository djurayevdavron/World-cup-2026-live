import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-yellow-400">404</h1>

      <h2 className="text-3xl font-bold text-white mt-4">
        {t("notFound.title")}
      </h2>

      <p className="text-slate-400 mt-3 max-w-md">
        {t("notFound.description")}
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition"
      >
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}

export default NotFound;

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TimezoneSwitcher from "./TimezoneSwitcher";
import { Link } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50">
      <div
        className="
  w-[98%]
  max-w-[1800px]

  mx-auto

  px-6

  h-20
  2xl:h-24

  flex
  items-center
  justify-between

  bg-slate-900/95
  backdrop-blur-md

  rounded-2xl

  border border-slate-800

  shadow-xl
"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/images/FWC-26-Logo-for-Countdown.svg"
            alt="World Cup"
            className="h-14 2xl:h-20"
          />

          <h1
            className="
            text-xl
            md:text-3xl
            xl:text-4xl
            2xl:text-5xl
            font-bold
            text-yellow-400
          "
          >
            {t("worldCup")}
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul
            className="
             flex
             items-center
             gap-10

             2xl:gap-16

             text-white
             text-xl
             2xl:text-3xl

             font-semibold

             2xl:mt-3
            "
          >
            <li>
              <Link to="/" className="hover:text-yellow-400">
                {t("home")}
              </Link>
            </li>

            <li>
              <Link to="/matches" className="hover:text-yellow-400">
                {t("matches")}
              </Link>
            </li>

            <li>
              <Link to="/standings" className="hover:text-yellow-400">
                {t("standings")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <TimezoneSwitcher />
          <LanguageSwitcher />
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="text-2xl font-bold text-yellow-400">
              ☰
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] bg-slate-950 text-white border-slate-800"
            >
              <div className="mt-12 flex flex-col gap-8 px-2">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/FWC-26-Logo-for-Countdown.svg"
                    alt="World Cup"
                    className="h-12"
                  />

                  <span className="font-bold text-yellow-400 text-lg">
                    {t("worldCup")}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <TimezoneSwitcher />
                  <LanguageSwitcher />
                </div>

                <Link
                  to="/"
                  className="text-left text-white text-xl font-medium hover:text-yellow-400 transition"
                >
                  {t("home")}
                </Link>

                <Link
                  to="/matches"
                  className="text-left text-white text-xl font-medium hover:text-yellow-400 transition"
                >
                  {t("matches")}
                </Link>

                <Link
                  to="/standings"
                  className="text-left text-white text-xl font-medium hover:text-yellow-400 transition"
                >
                  {t("standings")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
export default Navbar;

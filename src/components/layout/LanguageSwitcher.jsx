import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = {
    uz: "/flags/uzbekistan.png",
    ru: "/flags/russian.png",
    en: "/flags/great-brit.png",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <img
            src={languages[i18n.language]}
            alt="language"
            className="w-6 h-6 object-cover rounded-sm"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-slate-900 border-slate-700 text-white"
      >
        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("uz")}
          className="hover:bg-slate-800 cursor-pointer"
        >
          🇺🇿 O'zbekcha
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("ru")}
          className="hover:bg-slate-800 cursor-pointer"
        >
          🇷🇺 Русский
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("en")}
          className="hover:bg-slate-800 cursor-pointer"
        >
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;

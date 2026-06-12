import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TimezoneSwitcher() {
  const [selectedZone, setSelectedZone] = useState({
    flag: "/flags/uzbekistan.png",
    city: "Tashkent",
    timezone: "Asia/Tashkent",
  });

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: selectedZone.timezone,
      });

      setCurrentTime(time);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [selectedZone]);

  const timezones = [
    {
      flag: "/flags/uzbekistan.png",
      city: "Tashkent",
      timezone: "Asia/Tashkent",
    },
    {
      flag: "/flags/usa.png",
      city: "New York",
      timezone: "America/New_York",
    },
    {
      flag: "/flags/canada.png",
      city: "Toronto",
      timezone: "America/Toronto",
    },
    {
      flag: "/flags/mexico.png",
      city: "Mexico City",
      timezone: "America/Mexico_City",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-900 border-slate-700 text-white hover:bg-slate-800"
        >
          <img
            src={selectedZone.flag}
            alt={selectedZone.city}
            className="w-5 h-5 rounded-sm"
          />

          <span>{currentTime}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-slate-900 border-slate-700 text-white"
      >
        {timezones.map((zone) => (
          <DropdownMenuItem
            key={zone.city}
            onClick={() => setSelectedZone(zone)}
            className="hover:bg-slate-800 cursor-pointer"
          >
            <img
              src={zone.flag}
              alt={zone.city}
              className="w-5 h-5 mr-2 rounded-sm"
            />

            {zone.city}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default TimezoneSwitcher;

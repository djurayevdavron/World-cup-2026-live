export const flagMap = {
  Mexico: "/flags/mexico.png",
  "South Korea": "/flags/south-korea.png",
  "Czech Republic": "/flags/czech-republic.png",
  "South Africa": "/flags/south-africa-republic.png",

  Canada: "/flags/canada.png",
  "Bosnia & Herzegovina": "/flags/bosnia.png",
  Qatar: "/flags/qatar.png",
  Switzerland: "/flags/swits.png",

  Brazil: "/flags/brazil.png",
  Morocco: "/flags/marocco.png",
  Haiti: "/flags/haiti.png",
  Scotland: "/flags/scotland.png",

  USA: "/flags/usa.png",
  Paraguay: "/flags/paraguay.png",
  Australia: "/flags/australia.png",
  Turkey: "/flags/turkey.png",

  Germany: "/flags/germany.png",
  Curacao: "/flags/curasao.png",
  "Ivory Coast": "/flags/ivory-coast.png",
  Ecuador: "/flags/ecuador.png",

  Netherlands: "/flags/netherlands.png",
  Japan: "/flags/japan.png",
  Sweden: "/flags/sweden.png",
  Tunisia: "/flags/tunisia.png",

  Spain: "/flags/spain.png",
  "Cape Verde": "/flags/cape-verde.png",
  "Saudi Arabia": "/flags/saudi-arabia.png",
  Uruguay: "/flags/uruguay.png",

  Belgium: "/flags/belgium.png",
  Egypt: "/flags/egypt.png",
  Iran: "/flags/iran.png",
  "New Zealand": "/flags/new-zealand.png",

  France: "/flags/france.png",
  Senegal: "/flags/senegal.png",
  Iraq: "/flags/iraq.png",
  Norway: "/flags/norway.png",

  Argentina: "/flags/argentina.png",
  Algeria: "/flags/algeria.png",
  Austria: "/flags/austria.png",
  Jordan: "/flags/jordan.png",

  Portugal: "/flags/portugal.png",
  "D.R. Congo": "/flags/DR-Congo.png",
  Uzbekistan: "/flags/uzbekistan.png",
  Colombia: "/flags/colombia.png",

  England: "/flags/england.png",
  Croatia: "/flags/croatia.png",
  Ghana: "/flags/ghana.png",
  Panama: "/flags/panama.png",
};
export const getFlag = (teamName) => {
  return flagMap[teamName] || "/flags/default.png";
};
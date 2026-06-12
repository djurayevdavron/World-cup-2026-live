export function calculateBestThirdTeams(allStandings) {
  const thirdPlacedTeams = [];

  Object.entries(allStandings).forEach(([group, teams]) => {
    if (teams[2]) {
      thirdPlacedTeams.push({
        ...teams[2],
        group,
      });
    }
  });

  return thirdPlacedTeams
    .sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      if (b.gd !== a.gd) {
        return b.gd - a.gd;
      }

      return b.gf - a.gf;
    })
    .slice(0, 8);
}
export function calculateStandings(matches, groupTeams) {
  const teams = {};

  groupTeams.forEach((teamName) => {
    teams[teamName] = {
      name: teamName,
      played: 0,
      won: 0,
      draw: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    };
  });

  matches
    .filter((match) => match.status === "finished")
    .forEach((match) => {
      const {
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
      } = match;

      if (!teams[homeTeam] || !teams[awayTeam]) return;

      teams[homeTeam].played++;
      teams[awayTeam].played++;

      teams[homeTeam].gf += homeScore;
      teams[homeTeam].ga += awayScore;

      teams[awayTeam].gf += awayScore;
      teams[awayTeam].ga += homeScore;

      if (homeScore > awayScore) {
        teams[homeTeam].won++;
        teams[homeTeam].points += 3;
        teams[awayTeam].lost++;
      } else if (awayScore > homeScore) {
        teams[awayTeam].won++;
        teams[awayTeam].points += 3;
        teams[homeTeam].lost++;
      } else {
        teams[homeTeam].draw++;
        teams[awayTeam].draw++;

        teams[homeTeam].points++;
        teams[awayTeam].points++;
      }
    });

  return Object.values(teams)
    .map((team) => ({
      ...team,
      gd: team.gf - team.ga,
    }))
    .sort((a, b) => {
      if (b.points !== a.points)
        return b.points - a.points;

      if (b.gd !== a.gd)
        return b.gd - a.gd;

      return b.gf - a.gf;
    });
}
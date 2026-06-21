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
      awayGoals: 0,
    };
  });

  matches
    .filter((match) => match.status === "finished")
    .forEach((match) => {
      const { homeTeam, awayTeam, homeScore, awayScore } = match;

      if (!teams[homeTeam] || !teams[awayTeam]) return;

      teams[homeTeam].played++;
      teams[awayTeam].played++;

      teams[homeTeam].gf += homeScore;
      teams[homeTeam].ga += awayScore;

      teams[awayTeam].gf += awayScore;
      teams[awayTeam].ga += homeScore;
      teams[awayTeam].awayGoals += awayScore;

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
      // 1. Points
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      // 2. Head-to-Head
      const h2h = matches.find(
        (match) =>
          match.status === "finished" &&
          ((match.homeTeam === a.name && match.awayTeam === b.name) ||
            (match.homeTeam === b.name && match.awayTeam === a.name)),
      );

      if (h2h) {
        // A yutgan
        if (
          (h2h.homeTeam === a.name && h2h.homeScore > h2h.awayScore) ||
          (h2h.awayTeam === a.name && h2h.awayScore > h2h.homeScore)
        ) {
          return -1;
        }

        // B yutgan
        if (
          (h2h.homeTeam === b.name && h2h.homeScore > h2h.awayScore) ||
          (h2h.awayTeam === b.name && h2h.awayScore > h2h.homeScore)
        ) {
          return 1;
        }
      }

      // 3. Goal Difference
      if (b.gd !== a.gd) {
        return b.gd - a.gd;
      }

      // 4. Goals For
      if (b.gf !== a.gf) {
        return b.gf - a.gf;
      }

      // 5. Away Goals
      if (b.awayGoals !== a.awayGoals) {
        return b.awayGoals - a.awayGoals;
      }

      return 0;
    });
}

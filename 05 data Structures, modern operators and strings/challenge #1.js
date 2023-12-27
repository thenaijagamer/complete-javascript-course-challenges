// Challenge 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(allPlayers, players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) console.log(players[i]);
//   console.log(`Goals scored: ${players.length}`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// // Team that is more likely to win
// team1 > team2 || console.log(`Team 1 is more likely to win`);
// team2 > team1 || console.log(`Team 2 is more likely to win`);

// Challenge 2
// "Goal 1: Lewandowski
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

let sum = 0;
const values = Object.values(game.odds);
for (const value of values) sum += value;
const average = sum / values.length;
console.log(`The average game odd is ${average}`);

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${game?.[team] ?? "draw"}: ${odd}`);
}

// const players = ["Gnarby", "Hummels", "Lewandowski"];
// const goals = [1, 1, 2];
const scorers = {};
// for (const iterator of players.entries) {

// }
scorers["Gnarby"] = 1;
scorers["Hummels"] = 1;
scorers["Lewandowski"] = 2;
// scorers{...players} = goals;
console.log(scorers);

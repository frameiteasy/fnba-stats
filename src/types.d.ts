export type Club = {
  id: string;
  shortName: string;
  name: string;
}

export type PlayerStats = {
  id: number;
  age: number;
  team: string;
  season: number;
  games: number;
  minutes: number;
  fga: number;
  fgm: number;
  fta: number;
  ftm: number;
  pts: number;
  oreb: number;
  dreb: number;
  ast: number;
  st: number;
  blk: number;
  to: number;
  pf: number;
  fpts?: number;
  fptsAvg?: number;
}

export type Player = {
  playerId: string;
  positions: Set<string>;
  name: string;
  playerStats?: PlayerStats[];
}
import { Player, PlayerStats } from "../../types";
import paulGeorge from '../../players/paul_george.json';
import clubs from '../../clubs.json'
import { useCallback, useEffect } from "react";

type UsePlaterDataReturnType = {
  getPlayerData: (playerId: string) => Player | undefined;
}

const sortByAge = (a: PlayerStats, b: PlayerStats) => (a.age - b.age);

export const usePlayersData = (): UsePlaterDataReturnType => {

  const playersMap = new Map<string, Player>();

  const crearePlater = (playerData: any[]): Player => {

    let playerId = '';
    let playerName = '';
    let playerPositions = new Set<string>();

    const playerStats: PlayerStats[] = playerData.map((season) => {

      playerId = season.playerId;
      playerName = season.playerName;
      playerPositions.add(season.position);

      return({
        id: season.id,
        age: season.age,
        team: season.team,
        season: season.season,
        games: season.games,
        minutes: season.minutesPg,
        fga: season.fieldAttempts,
        fgm: season.fieldGoals,
        fta: season.ftAttempts,
        ftm: season.ft,
        pts: season.points,
        oreb: season.offensiveRb,
        dreb: season.defensiveRb,
        ast: season.assists,
        st: season.steals,
        blk: season.blocks,
        to: season.turnovers,
        pf: season.personalFouls
      });
    }, []);

    const newPlayer: Player = {
      playerId,
      name: playerName,
      positions: playerPositions,
      playerStats: playerStats.sort(sortByAge)
    }

    return newPlayer;
  }

  const initPlayersMap = useCallback(() => {
    const playerData: any[] = paulGeorge;
    const newPlayer = crearePlater(playerData);

    playersMap.set(newPlayer.playerId, newPlayer);


  }, [playersMap]);

  useEffect(() => {
    initPlayersMap();
  }, []);

  const getPlayerData = (playerId: string): Player | undefined => {
    return playersMap.get(playerId);
  }

  return {
    getPlayerData
  }
}
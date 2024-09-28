
import { useEffect, useState } from 'react';
import settings from '../../settings.json';
import { Player, PlayerStats } from '../../types';
import { usePlayersData } from './usePlayersData';

type UsePlayerStatsReturnType = {
  playerStats: Player | undefined
}

const calcFantasyPoints = (playerStats: PlayerStats): number => {
  return (
    settings.points.min * playerStats.minutes +
    settings.points.fga * playerStats.fga +
    settings.points.fgm * playerStats.fgm +
    settings.points.fta * playerStats.fta +
    settings.points.pts * playerStats.pts +
    settings.points.oreb * playerStats.oreb +
    settings.points.dreb * playerStats.dreb +
    settings.points.ast * playerStats.ast +
    settings.points.st * playerStats.st +
    settings.points.blk * playerStats.blk +
    settings.points.to * playerStats.to +
    settings.points.pf * playerStats.pf
  )
}

export const usePlayerStats = (playerId: string): UsePlayerStatsReturnType => {

  const [ playerStats, setPlayerStats ] = useState<Player | undefined>();

  const { getPlayerData } = usePlayersData();

  useEffect(() => {
    const player = getPlayerData(playerId);


    if (player?.playerStats !== undefined) {
      const statsWithFPoints = player?.playerStats.map((pos) => {
        pos.fpts = calcFantasyPoints(pos);
        pos.fptsAvg = pos.fpts / pos.games;
        return pos;
      }, []);

      const fPlayer: Player = {
        ...player,
        playerStats: statsWithFPoints
      }

      setPlayerStats(fPlayer);
    } else {
      setPlayerStats(player);
    }

    
  }, [getPlayerData, playerId]);

  return {
    playerStats
  }

}
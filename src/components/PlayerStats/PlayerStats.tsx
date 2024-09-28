import { usePlayerStats } from "./usePlayerStats"

export const PlayerStats = () => {

  const { playerStats } = usePlayerStats("georgpa01");

  console.log('PlayerStats 1', playerStats);

  return(
    <>
      <h1>{playerStats?.name}</h1>
    </>
  )
}
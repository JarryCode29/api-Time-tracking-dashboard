import { StatisticsEntry, NonSensitiveInfoStatisticsEntry, NewStatisticsEntry } from '../types'
import statisticsData from './statistics.json'

const statistics: StatisticsEntry[] = statisticsData as StatisticsEntry[]

export const getEntries = (): StatisticsEntry[] => statistics

export const findById = (id: number): NonSensitiveInfoStatisticsEntry | undefined => {
  const entry = statistics.find(d => d.id === id)
  if (entry != null) {
    const { title, ...restOFStatistics } = entry
    return restOFStatistics
  }
  return undefined
}
export const getEntriesWitHoutSensitiveInfo = (): NonSensitiveInfoStatisticsEntry[] => {
  return statistics.map(({ id, timeframes }) => {
    return {
      id,
      timeframes
    }
  })
}

export const addStatistics = (newStatisticsEntry: NewStatisticsEntry): StatisticsEntry => {
  const newStatistics = {
    id: statistics.length + 1, // id: Math.max(...statistics.map(d => d.id)) + 1,
    ...newStatisticsEntry
  }

  statistics.push(newStatistics)
  return newStatistics
}

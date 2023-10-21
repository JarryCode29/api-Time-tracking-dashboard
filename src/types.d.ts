export type title = 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care'

export interface StatisticsEntry {
  id: number
  title: title
  timeframes: {
    daily: {
      current: number
      previous: number
    }
    weekly: {
      current: number
      previous: number
    }
    monthly: {
      current: number
      previous: number
    }
  }
}

// export type NonSensitiveInfoStatisticsEntry = Pick<StatisticsEntry, 'id' | 'title' | 'timeframes' >

export type NonSensitiveInfoStatisticsEntry = Omit<StatisticsEntry, 'title'>

export type NewStatisticsEntry = Omit<StatisticsEntry, 'id'>

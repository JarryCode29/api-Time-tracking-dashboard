import { NewStatisticsEntry } from './types'
import { Title } from './enums'
// Strutur of Timeframes
interface Timeframes {
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
// String
const isString = (value: any): boolean => {
  return typeof value === 'string'
}
// title
const isTitle = (title: any): boolean => {
  return Object.values(Title).includes(title)
}

const parseTitle = (titleFromRequest: any): Title => {
  if (!isString(titleFromRequest) || !isTitle(titleFromRequest)) {
    throw new Error('Incorrect or missing title')
  }
  return titleFromRequest
}
// timeframes
const isNumber = (data: any): boolean => {
  return typeof data === 'number'
}
const parseTimeframes = (timeframesFromRequest: any): Timeframes => {
  if (
    !isNumber(timeframesFromRequest.daily.current) ||
    !isNumber(timeframesFromRequest.daily.previous) ||
    !isNumber(timeframesFromRequest.weekly.current) ||
    !isNumber(timeframesFromRequest.weekly.previous) ||
    !isNumber(timeframesFromRequest.monthly.current) ||
    !isNumber(timeframesFromRequest.monthly.previous)) {
    throw new Error('Incorrect or missing timeframe values')
  }
  return {
    daily: {
      current: timeframesFromRequest.daily.current,
      previous: timeframesFromRequest.daily.previous
    },
    weekly: {
      current: timeframesFromRequest.weekly.current,
      previous: timeframesFromRequest.weekly.previous
    },
    monthly: {
      current: timeframesFromRequest.monthly.current,
      previous: timeframesFromRequest.monthly.previous
    }
  }
}

// Function toNewStatisticsEntry
const toNewStatisticsEntry = (object: any): NewStatisticsEntry => {
  if (!isString(object.title)) {
    throw new Error('Incorrect or missing title')
  }
  parseTimeframes(object.timeframes)

  const newEntry: NewStatisticsEntry = {
    title: parseTitle(object.title),
    timeframes: parseTimeframes(object.timeframes)
    // Aquí deberías incluir las otras propiedades requeridas de NewStatisticsEntry
  }
  return newEntry
}

export default toNewStatisticsEntry

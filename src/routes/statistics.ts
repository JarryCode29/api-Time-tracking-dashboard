import express from 'express'
import * as statisticsServices from '../services/statisticsServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(statisticsServices.getEntriesWitHoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const statistics = statisticsServices.findById(Number(req.params.id)) // Esto tambien lo puedes hacer de la siguiente manera: "findById(number(req.params.id))"
  return (statistics != null)
    ? res.send(statistics)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { title, timeframes } = req.body

  const newStatisticsEntry = statisticsServices.addStatistics({
    title,
    timeframes: {
      daily: {
        current: timeframes.daily.current,
        previous: timeframes.daily.previous
      },
      weekly: {
        current: timeframes.weekly.current,
        previous: timeframes.weekly.previous
      },
      monthly: {
        current: timeframes.monthly.current,
        previous: timeframes.monthly.previous
      }
    }

  })

  res.json(newStatisticsEntry)
})

export default router

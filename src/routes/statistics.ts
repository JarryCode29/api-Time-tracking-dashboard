import express from 'express'
import * as statisticsServices from '../services/statisticsServices'
import toNewStatisticsEntry from '../utils'
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
  try {
    const newStatisticsEntry = toNewStatisticsEntry(req.body)
    const addStatisticsEntry = statisticsServices.addStatistics(newStatisticsEntry)

    res.json(addStatisticsEntry)
  } catch (e) {
    const error = e as Error
    res.status(400).send(error.message)
  }
})

export default router

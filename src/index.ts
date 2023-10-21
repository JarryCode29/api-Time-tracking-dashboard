import express from 'express'
// const express = require('express') --> commonjs
import statisticsRouter from './routes/statistics'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/statistics', statisticsRouter)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

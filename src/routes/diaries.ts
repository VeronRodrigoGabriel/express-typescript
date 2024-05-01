import { Router } from 'express'
import * as diaryServices from '../services/diary'

const router = Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findByid(Number(req.params.id))

  return diary?
    res.send(diary):
    res.sendStatus(404)
})


router.post('/', (req, res) => {
  const {date, weather, visibility, comment} = req.body

  const newDiaryEntry = diaryServices.addDiary({date,weather,visibility,comment})

  res.json(newDiaryEntry)
})

export default router

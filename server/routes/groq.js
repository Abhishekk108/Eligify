import express from 'express'
import { explainScheme, generateChecklist } from '../controllers/groqController.js'

const router = express.Router()

router.post('/explain', explainScheme)
router.post('/checklist', generateChecklist)

export default router

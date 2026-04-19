import express from 'express'
import { explainSchemeChat } from '../controllers/explainController.js'

const router = express.Router()

router.post('/', explainSchemeChat)

export default router

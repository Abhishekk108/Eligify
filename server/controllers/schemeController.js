import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const schemes = JSON.parse(
  readFileSync(join(__dirname, '../data/schemes.json'), 'utf-8')
)

export const getSchemes = (req, res) => {
  res.json({ schemes })
}

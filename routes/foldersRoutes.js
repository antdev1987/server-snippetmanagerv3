import express from 'express'
const router = express.Router()
import {newFolder} from '../controllers/folderControllers.js'

router.post('/new',newFolder)

export default router
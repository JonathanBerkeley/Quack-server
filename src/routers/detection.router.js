import { Router } from "express"

import DetectionController from "../controllers/detection.controller.js"

const router = Router()
router.post("/", DetectionController.Post)

export default router
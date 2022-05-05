import { Router } from "express"

import HeartbeatController from "../controllers/heartbeat.controller.js"

const router = Router()
router.post("/", HeartbeatController.Post)

export default router
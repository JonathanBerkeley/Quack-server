import { Router } from "express"

import Heartbeat from "../controllers/heartbeat.controller.js"

const router = Router()
router.get("/", Heartbeat.Get)
router.post("/", Heartbeat.Post)

export default router
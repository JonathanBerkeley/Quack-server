import { Router } from "express"

import Heartbeat from "../controllers/heartbeat.controller.js"

const router = Router()
router.get("/", Heartbeat.Get)

export default router
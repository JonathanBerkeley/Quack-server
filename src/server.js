import express from "express"

import HeartbeatRouter from "./routers/heartbeat.router.js"
import DetectionRouter from "./routers/detection.router.js" // Anticheat detections

const app = express()

// Pipeline
app.use(express.json())
app.use("/", HeartbeatRouter)
app.use("/ac", DetectionRouter)

export default app
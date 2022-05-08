import express from "express"

import HeartbeatRouter from "./routers/heartbeat.router.js"
import DetectionRouter from "./routers/detection.router.js" // Anticheat detections
import DataRouter from "./routers/data.router.js" // Signatures and blacklists for anti-cheats to detect

const app = express()

// Pipeline
app.use(express.json())
app.use("/", HeartbeatRouter)
app.use("/ac", DetectionRouter)
app.use("/data", DataRouter)

export default app
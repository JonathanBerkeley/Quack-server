import express from "express"

import HeartbeatRouter from "./routers/heartbeat.router.js"

const app = express()

// Pipeline
app.use(express.json())
app.use("/", HeartbeatRouter)

export default app
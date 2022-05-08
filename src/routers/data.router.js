import { Router } from "express"

import DataController from "../controllers/data.controller.js"

const router = Router()
router.get("/signatures", DataController.Signatures)
router.get("/blacklists", DataController.Blacklists)

export default router
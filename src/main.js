import { MongoClient } from "mongodb"
import dotenv from "dotenv"

import app from "./server.js"
import DetectionDAO from "./dao/detection.dao.js"
import HeartbeatDAO from "./dao/heartbeat.dao.js"
import DataDAO from "./dao/data.dao.js"

if (dotenv.config().error) {
    console.error("[ Error ] => ENV file invalid, missing or cannot be read")
}

class Config {
    static DB_URI = process.env.DB_URI
    static DB_NAME = process.env.DB_NAME
    static PORT = process.env.PORT
    static CLIENT = new MongoClient(this.DB_URI)
    
    static DEV_MODE = true
    static VERSION = process.env.npm_package_version
}

async function main() {
    await Config.CLIENT.connect()
    await DetectionDAO.InjectDB(Config.CLIENT)
    await HeartbeatDAO.InjectDB(Config.CLIENT)
    await DataDAO.InjectDB(Config.CLIENT)

    app.listen(Config.PORT, () => {
        console.assert(Config.DEV_MODE, "[ Warning ] => in production mode")

        // Formatting for console
        let urlString = `[-- http://localhost:${Config.PORT}/ --]`
        let headerLength = urlString.length - 2

        console.log(`[${'-'.repeat(headerLength)}]`)
        console.log(`[--  Server version ${Config.VERSION}  --]\n${urlString}`)
        console.log(`[${'-'.repeat(headerLength)}]`)
    })
}

main()
    .catch((ex) => {
        console.error("Caught error: ", ex)
        process.exit(1)
    })

export default Config
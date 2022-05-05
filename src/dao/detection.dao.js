import DAO from "./dao.js"
import getUuid from "uuid-by-string"
import { ObjectId } from "mongodb"

var detections

export default class DetectionDAO extends DAO {
    static async InjectDB(connection) {
        if (detections) return

        try {
            detections = await super.RetrieveTable(connection, "DummyGame")
        }
        catch (ex) { this.#LogError(ex, "InjectDB", true) }
    }

    // todo: timestamps
    static async Detection(detection) {
        try {
            await detections.updateOne(
                { _id: getUuid(detection.uuid).trim() },
                { $set: {
                    cheat : detection.cheat,
                    path : detection.path,
                    banned : true
                } },
                { upsert: true })
            return { success : true }
        }
        catch (ex) { return this.#LogError(ex, "Detection") }
    }

    //#region Utility
    static #LogError(exception, location = undefined, exit = false) {
        super.LogError("DetectionDAO", exception, location, exit)
        return { error: exception }
    }
    //#endregion
}
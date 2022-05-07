import DAO from "./dao.js"

var detections

export default class DetectionDAO extends DAO {
    static async InjectDB(connection) {
        if (detections) return

        try {
            detections = await super.RetrieveTable(connection, process.env.DB_NAME)
        }
        catch (ex) { this.#LogError(ex, "InjectDB", true) }
    }

    static async Detection(detection) {
        try {
            await detections.updateOne(
                { _id: detection.uuid },
                { $set: {
                    cheat : detection.cheat,
                    scan : detection.scan,
                    path : detection.path,
                    ban_timestamp : Date.now(),
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
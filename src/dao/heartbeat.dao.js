import DAO from "./dao.js"

var heartbeats

export default class HeartbeatDAO extends DAO {
    
    static async InjectDB(connection) {
        if (heartbeats) return

        try {
            heartbeats = await super.RetrieveTable(connection, "Player")
        }
        catch (ex) { this.#LogError(ex, "InjectDB", true) }
    }

    static async Heartbeat(heartbeat) {
        try {
            await heartbeats.updateOne(
                { _id: heartbeat.uuid },
                { $set: {
                    username : heartbeat.name,
                    arp : heartbeat.arp,
                    risk : heartbeat.risk,
                    uptime : heartbeat.uptime,
                    blob : heartbeat.blob,
                    timestamp : Date.now()
                } },
                { upsert: true })
            return { success : true }
        }
        catch (ex) { return this.#LogError(ex, "Heartbeat") }
    }

    //#region Utility
    static #LogError(exception, location = undefined, exit = false) {
        super.LogError("HeartbeatDAO", exception, location, exit)
        return { error: exception }
    }
    //#endregion
}
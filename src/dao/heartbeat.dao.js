import DAO from "./dao.js"

var heartbeat

export default class HeartbeatDAO extends DAO {
    static async InjectDB(connection) {
        if (heartbeat) return

        try {
            heartbeat = await super.RetrieveTable(connection, "")
        }
        catch (ex) { this.#LogError(ex, "InjectDB", true) }
    }
}
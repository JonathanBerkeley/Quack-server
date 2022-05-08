import DAO from "./dao.js"

var signatureCollection
var blacklistCollection

export default class DataDAO extends DAO {

    static async InjectDB(connection) {
        if (signatureCollection) return

        try {
            signatureCollection = await super.RetrieveTable(connection, "Signature")
            blacklistCollection = await super.RetrieveTable(connection, "Blacklist")
        }
        catch (ex) { this.#LogError(ex, "InjectDB", true) }
    }

    static async Signature() {
        try {
            return await signatureCollection.find().toArray()
        }
        catch (ex) { return this.#LogError(ex, "Data") }
    }

    static async Blacklist() {
        try {
            return await blacklistCollection.find().toArray()
        }
        catch (ex) { return this.#LogError(ex, "Data") }
    }

    //#region Utility
    static #LogError(exception, location = undefined, exit = false) {
        super.LogError("DataDAO", exception, location, exit)
        return { error: exception }
    }
    //#endregion
}
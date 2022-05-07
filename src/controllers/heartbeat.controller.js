import HeartbeatDAO from "../dao/heartbeat.dao.js"
import Controller from "./controller.js"

export default class Heartbeat extends Controller {
    static async Post(req, res) {
        let { heartbeat } = req.body

        if (await HeartbeatDAO.Heartbeat(heartbeat))
            res.status(200).json({
                [heartbeat.name] : "Received heartbeat"
            })
        else
            res.status(500)

        console.log("Heartbeat: ", heartbeat)
    }
}

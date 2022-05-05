import DetectionDAO from "../dao/detection.dao.js"
import Controller from "./controller.js"

export default class Detection extends Controller {

    static async Post(req, res) {

        super.Query(req, res, async () => {
            let { detection } = req.body

            if (await DetectionDAO.Detection(detection))
                res.status(200)
            else
                res.status(500)

            console.log("Detection: ", detection)
        })

    }

}
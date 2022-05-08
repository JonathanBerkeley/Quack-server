import DataDAO from "../dao/data.dao.js"
import Controller from "./controller.js"

export default class Data extends Controller {

    static async Signatures(req, res) {

        super.Query(req, res, async () => {
            
            if (await DataDAO.Signature())
                res.status(200)
            else
                res.status(500)

            console.log("Called!")
        })

    }

    static async Blacklists(req, res) {

        super.Query(req, res, async () => {

            if (await DataDAO.Blacklist())
                res.status(200)
            else
                res.status(500)

        })

    }

}
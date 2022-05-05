export default class Heartbeat {

    static async Post(request, response) {
        let { heartbeat } = request.body
        response.status(200).json({
            [heartbeat.name] : "Received heartbeat"
        })
        console.log("Heartbeat: ", heartbeat)
    }

}
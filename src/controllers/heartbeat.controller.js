export default class Heartbeat {
    static async Get(request, response) {
        let { heartbeat } = request.body
        response.status(200).json({
            "HELLO" : "WORLD"
        })
        console.log("GET: ", heartbeat)
    }

    static async Post(request, response) {
        let { heartbeat } = request.body
        response.status(200).json({
            [heartbeat.name] : "Received heartbeat"
        })
        console.log("POST: ", heartbeat)
    }
}
export default class Heartbeat {
    static async Get(request, reply) {
        let { heartbeat } = request.body
        reply.status(200).json({"HELLO" : "WORLD"})
        console.log("GOT", heartbeat)
    }
}

export default class Controller {
    static async Query(req, res, query) {
        try {
            query()
        }
        catch (ex) {
            res.status(500).json({
                Error: ex,
                ErrorMessage: ex.message
            })
        }
    }

    //#region Utility

    /**
     * @description
     * Returns true if string contains numeric value
     * From https://stackoverflow.com/a/9716488
     * @static
     * @param {*} number String to check
     * @return {*}  {boolean}
     * @memberof Controller
     */
    static IsNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number)
    }


    /**
     * @description
     * Returns true if string contains a lower case character.
     * From: https://stackoverflow.com/a/2830852
     * @static
     * @param {*} str String to be checked
     * @memberof Account
     */
    static ContainsLowerCase(str) {
        return str.toUpperCase() != str
    }

    /**
     * @description
     * Returns true if string contains an upper case character.
     * Adapted from: https://stackoverflow.com/a/2830852
     * @static
     * @param {*} str String to be checked
     * @memberof Account
     */
    static ContainsUpperCase(str) {
        return str.toLowerCase() != str
    }

    static ParseJWT(req) {
        return (req.get("Authorization")) ? req.get("Authorization").slice("Bearer ".length) : undefined
    }
    //#endregion

    static ErrorResponse(res, message, code = 400) {
        res.status(code).json({ error: message })
    }
}
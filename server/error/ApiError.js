class ApiError extends Error{
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ApiError(404, messages)
    }

    static internal(message) {
        return new ApiError(500, messages)
    }

    static forbidden(message) {
        return new ApiError(403, messages)
    }
}
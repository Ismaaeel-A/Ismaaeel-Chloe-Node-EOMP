function errorHandling (err, req, res, next) {
    if (err || res.statusCode >= 400) {
        res.json(
            {
                status: err.status ||
                res.statusCode || 500,
                err: "An error has occurred. Please try again later."
            }
        )
    }

    next()
}

export{
    errorHandling
}
const express = require("express");

class AArchitectureRouter {
    constructor(aarchitectureService) {
        this.aarchitectureService = aarchitectureService
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this))
        return router
    }

    get(req, res) {
        console.log("Requesting getting all articles")
        return this.aarchitectureService
            .aarchitecture()
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    }

}

module.exports = AArchitectureRouter;

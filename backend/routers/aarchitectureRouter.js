const express = require("express");

class AArchitectureRouter {
    constructor(aarchitectureService, articleService, archiveService) {
        this.aarchitectureService = aarchitectureService
        this.articleService = articleService
        this.archiveService = archiveService
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this))
        router.get("/article", this.getArticle.bind(this))
        router.get("/archive", this.getArchive.bind(this))
        return router
    }

    get(req, res) {
        console.log("Requesting getting all articles")
        return this.aarchitectureService
            .aarchitecture()
            .then((data) => {
                console.log('router data', data)
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    }

    getArticle (req, res) {
        console.log("Requesting getting single article")
        return this.articleService
        .article(req.query.articleId)
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    }

    getArchive (req, res) {
        console.log("Requesting getting archive")
        return this.archiveService
        .archive()
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    }

}

module.exports = AArchitectureRouter;

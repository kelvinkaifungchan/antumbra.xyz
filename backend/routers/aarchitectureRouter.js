const express = require("express");

class AArchitectureRouter {
    constructor(aarchitectureService, articleService) {
        this.aarchitectureService = aarchitectureService
        this.articleService = articleService
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this))
        router.get("/article", this.getArticle.bind(this))
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
        //http://localhost:8080/api/aarchitecture/article/?articleId=1
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    }

}

module.exports = AArchitectureRouter;

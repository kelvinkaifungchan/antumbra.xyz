const express = require("express");

class AdminRouter {
    constructor(aarchitectureService, articleService, bridgeService) {
        this.aarchitectureService = aarchitectureService
        this.articleService = articleService
        this.bridgeService = bridgeService
    }

    router() {
        let router = express.Router();
        router.post("/", this.post.bind(this))
        router.post("/delete", this.delete.bind(this))

        return router
    }

    post(req, res) {
        console.log("Requesting adding article")
        return this.articleService
            .add(req.body)
            .then(() => {
                req.body.tags.map((tag) => {
                    return this.bridgeService
                    .addTag(req.body.articleId, tag.tag)
                })
            })
            .then(() => {
                req.body.attachments.map((attachment) => {
                    return this.articleService
                    .addAttachment(req.body.articleId, attachment.attachmentLink)
                })
            })
            .then(() => {
                this.aarchitectureService
                .aarchitecture()
            })
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    }

    delete(req, res) {
        req.body.tags.map((tag) => {
            return this.bridgeService
            .addTag(req.body.articleId, tag.tag)
        })
        .then(() => {
            req.body.attachments.map((tag) => {
                return this.bridgeService
                .addTag(req.body.articleId, tag.tag)
            })
        })
        .then(() => {
            return this.articleService
            .delete(req.body.articleId)
        })
        .then(() => {
            this.aarchitectureService
            .aarchitecture()
        })
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    }
}

module.exports = AdminRouter;

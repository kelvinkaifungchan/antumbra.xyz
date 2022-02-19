const express = require("express");

class AdminRouter {
    constructor(articleService, bridgeService) {
        this.articleService = articleService
        this.bridgeService = bridgeService
    }

    router() {
        let router = express.Router();
        router.post("/", this.post.bind(this))
        router.post("/tag", this.postTag.bind(this))
        router.post("/attachment", this.postAttachment.bind(this))
        router.put("/", this.put.bind(this))
        router.post("/deletearticle", this.delete.bind(this))
        router.post("/deletetag", this.delete.bind(this))
        router.post("/deleteattachment", this.delete.bind(this))

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
            .catch((err) => {
                return res.status(500).json(err)
            })
    }

    postTag(req, res) {
        console.log("Requesting adding tag to article")
        return this.bridgeService
        .addTag(req.body.articleId, req.body.tag)
        .catch((err) => {
            return res.status(500).json(err)
        })
    }

    postAttachment(req, res) {
        console.log("Requesting adding attachment to article")
        return this.bridgeService
        .addAttachment(req.body.articleId, req.body.attachmentLink)
        .catch((err) => {
            return res.status(500).json(err)
        })
    }

    put(req, res) {
        console.log("Requesting editing article")
        return this.articleService
            .edit(req.body)
            .catch((err) => {
                return res.status(500).json(err)
            })
    }

    delete(req, res) {
    }

    deleteTag(req, res) {
        console.log("Requesting deleting tag from article")
        return this.bridgeService
        .deleteTag(req.body.articleId, req.body.tag)
        .catch((err) => {
            return res.status(500).json(err)
        })
    }

    deleteAttachment(req, res) {
        console.log("Requesting deleting tag from article")
        return this.bridgeService
        .deleteAttachment(req.body.articleId, req.body.attachmentLink)
        .catch((err) => {
            return res.status(500).json(err)
        })
    }
}

module.exports = AdminRouter;

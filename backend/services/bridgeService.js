class BridgeService {
    constructor(knex) {
        this.knex = knex;
    }
    async addTag(articleId, tag) {
        console.log("Adding new tag to article");

        const name = await this.knex("tag").where({
            tag: tag
        })

        return this.knex("article_tag")
            .insert({
                article_id: articleId,
                tag_id: name[0].id
            })
    }

    async deleteTag(articleId, tag) {
        console.log("Deleting tag from article");

        const name = await this.knex("tag").where({
            tag: tag
        })

        return this.knex("article_tag")
            .where({
                tag_id: name[0].id,
                article_id: articleId
            })
            .del()
    }

    addAttachment(articleId, attachment, attachmentType) {
        console.log("Adding new attachment to article");

        return this.knex("attachment")
            .insert({
                article_id: articleId,
                attachmentLink: attachment,
                attachmentType: attachmentType
            })
    }

    deleteAttachement(articleId, attachmentLink) {
        console.log("Deleting attachment from article");

        return this.knex("attachment")
            .where({
                article_id: articleId,
                attachmentLink: attachmentLink
            })
            .del()
    }
}
module.exports = BridgeService;
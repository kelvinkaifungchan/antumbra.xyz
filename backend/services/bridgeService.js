class BridgeService {
    constructor(knex) {
        this.knex = knex;
    }
    async addTag(articleId, tagBody) {
        console.log("Adding new tag to article");

        const tag = await this.knex("tag").where({
            tag: tagBody
        })

        return this.knex("article_tag")
            .insert({
                article_id: articleId,
                tag_id: tag[0].id
            })
    }

    async deleteTag(articleId, tagBody) {
        console.log("Deleting tag from article");

        const tag = await this.knex("tag").where({
            tag: tagBody
        })

        return this.knex("article_tag")
            .where({
                tag_id: tag[0].id,
                article_id: articleId
            })
            .del()
    }

    addAttachment(articleId, attachment) {
        console.log("Adding new attachment to article");

        return this.knex("attachment")
            .insert({
                article_id: articleId,
                attachmentLink: attachment
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
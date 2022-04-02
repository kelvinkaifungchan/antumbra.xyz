class ArticleService {
    constructor(knex) {
        this.knex = knex;
    }
    add(body) {
        console.log("Adding new article");

        return this.knex
            .insert({
                type: body.type,
                author: body.author,
                title: body.title,
                subtitle: body.subtitle,
                moduleType: body.moduleType,
                heroImage: body.heroImage,
                datePublished: body.datePublished,
            })
            .into("article")
            .returning("id")
            .catch((err) => {
                console.log(err)
            })
    }

    // edit(body) {
    //     console.log("editing card")
    //     return this.knex("card")
    //         .where("id", articleId)
    //         .update({
    //             author: body.author,
    //             title: body.title,
    //             subtitle: body.subtitle,
    //             datePublished: body.datePublished
    //         })
    //         .returning("id")
    // }

    delete(articleId) {
        return this.knex("article")
            .where({
                id: articleId
            })
            .del()
            .catch((err) => {
                console.log(err)
            })
    }

    article(articleId) {
        let article = {}
        return this.knex("article")
            .where({
                id: articleId
            })
            .then((data) => {
                article.type = data[0].type
                article.author = data[0].author
                article.title = data[0].title
                article.subtitle = data[0].subtitle
                article.moduleType = data[0].moduleType
                article.heroImage = data[0].heroImage
                article.datePublished = data[0].datePublished
            })
            .then(() => {
                return this.knex("article_tag")
                .join("tag", "article_tag.tag_id", "=", "tag.id")
                .select("article_tag.article_id", "article_tag.tag_id", "tag.tag")
                .where({
                    article_id: articleId
                })
                .then((tags) => {
                    article.tags = tags.map((tag) => {
                        return {
                            id: tag.tag_id,
                            tag: tag.tag
                        }
                    })
                })
            })
            .then(() => {
                return this.knex("attachment")
                .where({
                    article_id: articleId
                })
                .then((attachments) => {
                    article.attachments = attachments.map((attachment) => {
                        return {
                            id: attachment.id,
                            attachmentLink: attachment.attachmentLink,
                            attachmentType: attachment.attachmentType
                        }
                    })
                })
            })
            .then(() => {
                return article
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
module.exports = ArticleService;
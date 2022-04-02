class AArchitectureService {
    constructor(knex) {
        this.knex = knex;
    }

    attachment(articleId) {
        return this.knex("attachment")
            .where({
                article_id: articleId
            })
            .then((attachments) => {
                const data = attachments.map((attachment) => {
                    return {
                        attachmentLink: attachment.attachmentLink,
                        attachmentType: attachment.attachmentType
                    }
                })
                return data
            })
            .catch((err) => {
                console.log(err)
            })
    }

    tag(articleId) {
        return this.knex("article_tag")
        .join("tag", "article_tag.tag_id", "=", "tag.id")
        .select("article_tag.article_id", "article_tag.tag_id", "tag.tag")
        .where({
            article_id: articleId
        })
        .then((tags) => {
            const data = tags.map((tag) => {
                return {
                    id: tag.tag_id,
                    tag: tag.tag
                }
            })
            return data
        })
        .catch((err) => {
            console.log(err)
        })

    }

    allTags() {
        return this.knex("tag")
        .then((tags) => {
            const data = tags.map((tag) => {
                return {
                    id: tag.id,
                    tag: tag.tag
                }
            })
            return data
        })
    }

    aarchitecture() {
        // let data = {}
        return this.knex("article")
            .then(async (articles) => {
                const data = await Promise.all(articles.map(async (article) => {
                    let tags = await this.tag(article.id);
                    let attachments = await this.attachment(article.id);
                    return {
                        id: article.id,
                        type: article.type,
                        author: article.author,
                        title: article.title,
                        subtitle: article.subtitle,
                        moduleType: article.moduleType,
                        heroImage: article.heroImage,
                        datePublished: article.datePublished,
                        tags: tags,
                        attachments: attachments,
                    }
                }))
                return data
            })
            // .then(async () => {
            //     data.tags = await this.allTags()
            //     return data
            // })
            .catch((err) => {
                console.log(err)
            })
    }
}
module.exports = AArchitectureService;
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
                attachments.map((attachment) => {
                    return {
                        attachmentLink: attachment.attachmentLink
                    }
                })
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
            tags.map((tag) => {
                return {
                    id: tag.tag_id,
                    tag: tag.tag
                }
            })
        })

    }

    aarchitecture() {

        return this.knex("article")
            .then((articles) => {
                articles.map((article) => {
                    return {
                        type: article.type,
                        author: article.author,
                        title: article.title,
                        subtitle: article.subtitle,
                        datePublished: article.datePublished,
                        tags: tag(article.id),
                        attachments: attachment(article.id),
                    }
                })
            })
    }
}
class ArticleService {
    constructor(knex) {
        this.knex = knex;
    }

    add(body) {
        console.log("Adding new article");

        return this.knex
            .insert({
                title: body.title,
                subtitle: body.subtitle,
                heroImage: body.heroImage,
                datePublished: body.datePublished,
            })
            .into("article")
            .returning("id")
            //Add function to add contributor
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
                article.title = data[0].title
                article.subtitle = data[0].subtitle
                article.heroImage = data[0].heroImage
                article.datePublished = data[0].datePublished
            })
            .then(() => {
                return this.knex("article_contributor")
                .join("contributor", "article_contributor.contributor_id", "=", "contributor.id")
                .select("article_contributor.article_id", "article_contributor.contributor_id", "contributor.name", "contributor.bio")
                .where({
                    article_id: articleId
                })
                .then((contributors) => {
                    article.contributors = contributors.map((contributor) => {
                        return {
                            id: contributor.contributor_id,
                            name: contributor.name,
                            bio: contributor.bio
                        }
                    })
                })
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
                return this.knex("articleBlock")
                .where({
                    article_id: articleId
                })
                .then((articleBlocks) => {
                    article.articleBlocks = articleBlocks.map((articleBlock) => {
                        return {
                            id: articleBlock.id,
                            article_id: articleId,
                            type: articleBlock.type,
                            attachmentLink: articleBlock.attachmentLink,
                            attachmentCaption: articleBlock.attachmentCaption,
                            text: articleBlock.text
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
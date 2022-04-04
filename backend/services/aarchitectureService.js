class AArchitectureService {
    constructor(knex) {
        this.knex = knex;
    }

    articleBlock(articleId) {
        return this.knex("articleBlock")
            .where({
                article_id: articleId
            })
            .then((blocks) => {
                const data = blocks.map((block) => {
                    return {
                        id: block.id,
                        article_id: articleId,
                        type: block.type,
                        attachmentLink: block.attachmentLink,
                        attachmentCaption: block.attachmentCaption,
                        text: block.text,
                    }
                })
                return data
            })
            .catch((err) => {
                console.log(err)
            })
    }

    contributor(articleId) {
        return this.knex("article_contributor")
        .join("contributor", "article_contributor.contributor_id", "=", "contributor.id")
        .select("article_contributor.article_id", "article_contributor.contributor_id", "contributor.name", "contributor.bio")
        .where({
            article_id: articleId
        })
        .then((contributors) => {
            const data = contributors.map((contributor) => {
                return {
                    id: contributor.contributor_id,
                    name: contributor.name,
                    bio: contributor.bio
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

    aarchitecture() {
        // let data = {}
        return this.knex("article")
            .then(async (articles) => {
                const data = await Promise.all(articles.map(async (article) => {
                    let articleBlocks = await this.articleBlock(article.id);
                    let contributors = await this.contributor(article.id);
                    let tags = await this.tag(article.id);
                    return {
                        id: article.id,
                        type: article.type,
                        contributors: contributors,
                        title: article.title,
                        subtitle: article.subtitle,
                        heroImage: article.heroImage,
                        datePublished: article.datePublished,
                        tags: tags,
                        articleBlocks: articleBlocks,
                    }
                }))
                return data
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
module.exports = AArchitectureService;
class ArchiveService {
    constructor(knex) {
        this.knex = knex;
    }

    archive() {
        return this.knex("archive")
            .then((archive) => {
                const data = archive.map((issue) => {
                    return {
                        id: issue.id,
                        issue: issue.issue,
                        title: issue.title,
                        date: issue.date,
                        link: issue.link
                    }
                })
                return data
            })
            .catch((err) => {
                console.log(err)
            })
        }
}
module.exports = ArchiveService;
const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = () => {
    return knex("responses")
        .select("quote")
        .then(result => result)
        .catch(err => console.error(err))
}

module.exports = { getAll }

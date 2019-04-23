"use strict"
const path = require("path")

module.exports = {
    development: {
        client: "pg",
        connection: "postgres://anhtrieu:123456@localhost:5432/generator",
        migrations: {
            directory: path.join(__dirname, "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "db", "seeds")
        }
    },

    test: {
        client: "pg",
        connection: "postgres://anhtrieu:123456@localhost:5432/generator",
        migrations: {
            directory: path.join(__dirname, "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "db", "seeds")
        }
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "db", "seeds")
        }
    }
}

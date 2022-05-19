const { gql } = require('apollo-server-express');

const typeDefs = gql `
    input Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }

    input User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    input Query {
        me: User
    }

    input Auth {
        token: ID!
        user: User
    }

    input SavedBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }

    input Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: SavedBookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;
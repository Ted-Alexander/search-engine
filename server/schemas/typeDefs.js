//

const { gql } = require('apollo-server-express');



const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input BookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String! 
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removeBook(bookId: ID!): User
        saveBook(bookData: BookInput): User
    }


  `;

module.exports = typeDefs;

//login(email: String!, password: String!): Auth
// addUser(username: String!, email: String!, password: String!): Auth
// saveBook(bookData: BookInput): User
// removeBook(bookId: ID!): User

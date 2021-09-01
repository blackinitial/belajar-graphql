const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    _id: ID!,
    title: String!,
    author: String!,
    description: String,
    release_year: Int!,
    genre: String!
  }

  type Query {
    getAllBooks: [Book]!
  }

  type Mutation {
    createBook(
      title: String!,
      author: String!,
      description: String,
      release_year: Int!,
      genre: String!
    ): Book!
  }
`;

module.exports = typeDefs;
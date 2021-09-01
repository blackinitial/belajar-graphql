const BookModel = require('./models/Book');

module.exports = {
  Query: {
    getAllBooks: async () => await BookModel.find({})
  },

  Mutation: {
    createBook: async (_, args) => {
      const book = new BookModel(args);
      await book.save();
      return book;
    }
  }
}
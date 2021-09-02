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
    },

    updateBook: async (_, args) => {
      const book = await BookModel.findByIdAndUpdate(args._id, args, { new: true });
      return book;
    },

    deleteBook: async(_, args) => {
      const book = await BookModel.findByIdAndRemove(args._id);
      if (book) return true;
      return false;
    }
  }
}
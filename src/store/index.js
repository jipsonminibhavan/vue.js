import { createStore } from "vuex";

export default createStore({
  state: {
    books: [],
  },
  getters: {
    getbooks(state) {
      return state.books;
    },
    getfavbooks(state) {
      return state.books.filter((book) => book.isFav);
    },
  },
  mutations: {
    SET_BOOKS(state, value) {
      state.books = value;
    },
    ADD_BOOKS(state, book) {
      state.books.push(book);
    },
  },
  actions: {
    async loadBooks(ctx) {
      const response = await fetch("http://localhost:4730/books?_limit=10");
      const booksData = await response.json();
      const result = booksData.map((bookData) => {
        return {
          isFav: false,
          ...bookData,
        };
      });
      ctx.commit("SET_BOOKS", result);
    },
    toogleFavListEntry(ctx, book) {
      console.log(ctx, book);

      const entry = {
        ...book,
        isFav: !book.isFav,
      };

      fetch("http://localhost:4730/books/" + book.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }).then(async () => {
        await ctx.dispatch("loadBooks");
      });
    },
  },
  modules: {},
});

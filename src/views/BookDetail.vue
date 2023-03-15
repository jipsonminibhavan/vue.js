<template>
  <h1>{{ book.title }}</h1>
  <p>{{ book.abstract }}</p>
  <p>{{ book.price }}</p>
  <img :src="book.cover" alt="" />
  <a href="/book-list">Back</a>
</template>

<script>
export default {
  data() {
    return {
      book: {},
    };
  },
  async created() {
    /* const response = await fetch(
      "http://localhost:4730/books/" + this.$route.params.id
    );
    const bookData = await response.json();
    this.book = bookData;*/
    this.book = this.$store.getters.getbooks.find((book) => {
      return this.$route.params.id === book.id;
    });
  },
};
</script>

<template>
  <BookTable :books="books" @book-update="toogleFavListEntry" />
</template>

<script>
import BookTable from "@/components/BookTable.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookList",
  components: {
    BookTable,
  },
  computed: {
    ...mapGetters({ books: "getbooks" }),
  },
  methods: {
    toogleFavListEntry(book) {
      this.$store.dispatch("toogleFavListEntry", book);
    },
  },
};
</script>

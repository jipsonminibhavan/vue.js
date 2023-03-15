<template>
  <h1>Favoriten</h1>
  <BookTable :books="favBooks" @book-update="toogleFavListEntry" />
</template>

<script>
import BookList from "./BookList.vue";
import BookTable from "@/components/BookTable.vue";
export default {
  extends: BookList,
  components: {
    BookTable,
  },
  computed: {
    favBooks() {
      return this.$store.getters.getfavbooks;
    },
  },
};
</script>

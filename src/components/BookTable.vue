<template>
  <table>
    <thead>
      <tr>
        <th>Bookname</th>
        <th>ISBN</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book of books" :key="book.id">
        <td>{{ book.title }}</td>
        <td>{{ book.isbn }}</td>
        <td>
          <slot>
            <router-link :to="{ name: 'book-detail', params: { id: book.id } }"
              >Details</router-link
            >
            <FavButton :is-active="book.isFav" @clicked="updateBook(book)" />
          </slot>
        </td>
      </tr>
    </tbody>
    ´
  </table>
</template>

<script>
import FavButton from "@/components/FavButton.vue";

export default {
  components: {
    FavButton,
  },

  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    updateBook(book) {
      this.$emit("book-update", book);
    },
  },
};
</script>

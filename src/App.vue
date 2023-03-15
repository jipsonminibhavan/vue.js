<template>
  <nav>
    <router-link to="/new-book">New Book</router-link>|
    <router-link to="/book-list">Booklist</router-link>|
    <router-link :to="{ name: 'fav-list' }">Favoriten</router-link>|
  </nav>
  <router-view />
</template>
<script>
export default {
  async created() {
    await this.$store.dispatch("loadBooks");
  },
};
</script>

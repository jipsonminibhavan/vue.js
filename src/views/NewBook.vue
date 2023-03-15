<template>
  <div class="about">
    <h1>Total Book count: {{ $store.getters.getbooks.length }}</h1>
    <h2>Add a New Book</h2>
    <div class="field">
      <label>Title</label>
      <input v-model="book.title" type="text" placeholder="Add a booktitle" />
    </div>
    <div class="field">
      <label>Subtitle</label>
      <input v-model="book.subtitle" type="text" placeholder="Add asubtitle" />
    </div>
    <div class="field">
      <label>isbn</label>
      <input v-model="book.isbn" type="text" placeholder="Add an ISBN" />
    </div>
    <div class="field">
      <label>Abstract</label>
      <input
        v-model="book.abstract"
        type="text"
        placeholder="Add an abstract"
      />
    </div>
    <div class="field">
      <label>Author</label>
      <input v-model="book.author" type="text" placeholder="Add an author" />
    </div>
    <div class="field">
      <label>publisher</label>
      <input
        v-model="book.publisher"
        type="text"
        placeholder="Add a publisher"
      />
    </div>
    <div class="field">
      <label> price</label>
      <input v-model="book.price" type="text" placeholder="Add a price" />
    </div>
    <div class="field">
      <label>Cover</label>
      <input v-model="book.cover" img :src="book.cover" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    createNewBook() {
      return {
        title: "…",
        subtitle: "…",
        isbn: "…",
        abstract: "…",
        author: "…",
        publisher: "…",
        price: "$..",
        cover: "http://….png",
      };
    },
  },
};
</script>

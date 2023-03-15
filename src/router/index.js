import { createRouter, createWebHistory } from "vue-router";
import BookList from "@/views/BookList.vue";
import BookDetail from "@/views/BookDetail.vue";
import FavList from "@/views/FavList.vue";
import NewBook from "@/views/NewBook.vue";

const routes = [
  {
    path: "/book-list",
    name: "book-list",
    component: BookList,
  },
  {
    path: "/favorites",
    name: "fav-list",
    component: FavList,
  },

  {
    path: "/book-list/:id",
    name: "book-detail",
    component: BookDetail,
  },
  {
    path: "/new-book",
    name: "new-book",
    component: NewBook,
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewBook.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

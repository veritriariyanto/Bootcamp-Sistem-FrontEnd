import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/HomeView.vue");
const Blog = () => import("../views/BlogView.vue");
const BlogPost = () => import("../views/BlogPostView.vue");
const About = () => import("../views/AboutView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/posts",
      name: "BlogPost",
      component: BlogPost,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;

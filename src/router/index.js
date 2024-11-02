import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/HomeView.vue");
const Blog = () => import("../views/BlogView.vue");
const BlogPost = () => import("../views/BlogPostView.vue");

const About = () => import("../views/AboutView.vue");
const Category = () => import("../views/CategoryView.vue");
const Author = () => import("../views/AuthorView.vue");
const Contact = () => import("../views/ContactView.vue");
const PrivacyPolicy = () => import("../views/PrivacyPolicyView.vue");
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
    {
      path: "/category",
      name: "Category",
      component: Category,
    },
    {
      path: "/author",
      name: "Author",
      component: Author,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/privacypolicy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
  ],
});

export default router;

<template>
  <div class="bg-x-light">
    <HeaderContent />
    <BlogHeader />
    <AllBlog />
    <Categories />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "../components/HeaderContent.vue";
import Join from "../components/Home/Join.vue";
import FooterContent from "../components/FooterContent.vue";
import BlogHeader from "../components/Blog/BlogHeader.vue";
import AllBlog from "../components/Blog/AllBlog.vue";
import Categories from "../components/Blog/Categories.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    BlogHeader,
    AllBlog,
    Categories,
    Join,
    FooterContent,
  },
};
</script>

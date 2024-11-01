<template>
  <div class="bg-x-light">
    <HeaderContent />
    <BlogHeader />
    <AllBlog />
    <Category />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import Join from "/src/components/Home/Join.vue";
import FooterContent from "/src/components/FooterContent.vue";
import BlogHeader from "/src/components/Blog/BlogHeader.vue";
import AllBlog from "/src/components/Blog/AllBlog.vue";
import Category from "/src/components/Home/Category.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    BlogHeader,
    AllBlog,
    Category,
    Join,
    FooterContent,
  },
};
</script>

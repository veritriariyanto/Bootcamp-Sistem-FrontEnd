<template>
  <div class="bg-x-light">
    <HeaderContent />
    <HeaderPost />
    <BlogBody />
    <OtherPost />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "../components/HeaderContent.vue";
import Join from "../components/Home/Join.vue";
import FooterContent from "../components/FooterContent.vue";
import HeaderPost from "../components/Blog/Posts/HeaderPost.vue";
import BlogBody from "../components/Blog/Posts/BlogBody.vue";
import OtherPost from "../components/Blog/Posts/OtherPost.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    HeaderPost,
    BlogBody,
    OtherPost,
    Join,
    FooterContent,
  },
};
</script>

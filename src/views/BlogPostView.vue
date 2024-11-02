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
import HeaderContent from "/src/components/HeaderContent.vue";
import Join from "/src/components/Home/Join.vue";
import FooterContent from "/src/components/FooterContent.vue";
import HeaderPost from "/src/components/Blog/Posts/HeaderPost.vue";
import BlogBody from "/src/components/Blog/Posts/BlogBody.vue";
import OtherPost from "/src/components/Blog/Posts/OtherPost.vue";

export default {
  name: "BlogPost",
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

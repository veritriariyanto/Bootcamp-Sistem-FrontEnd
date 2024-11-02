<template>
  <div class="bg-x-light">
    <HeaderContent />
    <AuthorHeader />
    <MyBlog />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import FooterContent from "/src/components/FooterContent.vue";
import AuthorHeader from "/src/components/Author/AuthorHeader.vue";
import MyBlog from "/src/components/Author/MyBlog.vue";

export default {
  name: "Author",
  components: {
    HeaderContent,
    AuthorHeader,
    MyBlog,
    FooterContent,
  },
};
</script>

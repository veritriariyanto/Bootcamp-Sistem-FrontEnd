<template>
  <div class="bg-x-light">
    <HeaderContent />
    <HeaderAbout />
    <ListOfAuthor />
    <Author />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import Join from "/src/components/Home/Join.vue";
import FooterContent from "/src/components/FooterContent.vue";
import HeaderAbout from "/src/components/About/HeaderAbout.vue";
import ListOfAuthor from "/src/components/Home/ListOfAuthor.vue";
import Author from "/src/components/About/Author.vue";

export default {
  name: "About",
  components: {
    HeaderContent,
    HeaderAbout,
    ListOfAuthor,
    Author,
    Join,
    FooterContent,
  },
};
</script>

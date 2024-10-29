<template>
  <div class="bg-x-light">
    <HeaderContent />
    <HeaderAbout />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "../components/HeaderContent.vue";
import Join from "../components/Home/Join.vue";
import FooterContent from "../components/FooterContent.vue";
import HeaderAbout from "../components/About/HeaderAbout.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    HeaderAbout,
    Join,
    FooterContent,
  },
};
</script>

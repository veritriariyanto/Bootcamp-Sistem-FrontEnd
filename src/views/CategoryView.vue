<template>
  <div class="bg-x-light">
    <HeaderContent />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "../components/HeaderContent.vue";
import Join from "../components/Home/Join.vue";
import FooterContent from "../components/FooterContent.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    FooterContent,
  },
};
</script>

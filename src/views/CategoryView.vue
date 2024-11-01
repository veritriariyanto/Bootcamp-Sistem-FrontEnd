<template>
  <div class="bg-x-light">
    <HeaderContent />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import Join from "/src/components/Home/Join.vue";
import FooterContent from "/src/components/FooterContent.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    Join,
    FooterContent,
  },
};
</script>

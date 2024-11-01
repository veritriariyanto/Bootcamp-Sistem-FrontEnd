<template>
  <div class="bg-x-light">
    <HeaderContent />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import FooterContent from "/src/components/FooterContent.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    FooterContent,
  },
};
</script>

<template>
  <div class="bg-x-light">
    <HeaderContent />
    <CategorySection />
    <MainCategory />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import FooterContent from "/src/components/FooterContent.vue";
import CategorySection from "/src/components/Category/CategorySection.vue";
import MainCategory from "/src/components/Category/MainCategory.vue";
export default {
  name: "Category",
  components: {
    HeaderContent,
    CategorySection,
    MainCategory,
    FooterContent,
  },
};
</script>

<template>
  <div class="bg-x-light">
    <HeaderContent />
    <HomeHero />
    <FeaturedPost />
    <AboutUs />
    <div>
      <h2 class="text-4xl text-x-black text-center font-bold pt-9">
        Choose A Catagory
      </h2>
    </div>
    <Category />
    <SpecialPost />
    <ListOfAuthor />
    <Logo />
    <Testimonials />
    <Join />
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";
import HomeHero from "/src/components/Home/HomeHero.vue";
import FeaturedPost from "/src/components/Home/FeaturedPost.vue";
import AboutUs from "/src/components/Home/AboutUs.vue";
import Category from "/src/components/Home/Category.vue";
import SpecialPost from "/src/components/Home/SpecialPost.vue";
import ListOfAuthor from "/src/components/Home/ListOfAuthor.vue";
import Logo from "/src/components/Home/Logo.vue";
import Testimonials from "/src/components/Home/Testimonials.vue";
import Join from "/src/components/Home/Join.vue";
import FooterContent from "/src/components/FooterContent.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    HomeHero,
    FeaturedPost,
    AboutUs,
    Category,
    SpecialPost,
    ListOfAuthor,
    Logo,
    Testimonials,
    Join,
    FooterContent,
  },
};
</script>

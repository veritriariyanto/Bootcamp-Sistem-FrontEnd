<template>
  <div class="bg-x-light">
    <HeaderContent />
    <HomeHero />
    <FeaturedPost />
    <AboutUs />
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
import HeaderContent from "../components/HeaderContent.vue";
import HomeHero from "../components/Home/HomeHero.vue";
import FeaturedPost from "../components/Home/FeaturedPost.vue";
import AboutUs from "../components/Home/AboutUs.vue";
import Category from "../components/Home/Category.vue";
import SpecialPost from "../components/Home/SpecialPost.vue";
import ListOfAuthor from "../components/Home/ListOfAuthor.vue";
import Logo from "../components/Home/Logo.vue";
import Testimonials from "../components/Home/testimonials.vue";
import Join from "../components/Home/Join.vue";
import FooterContent from "../components/FooterContent.vue";

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

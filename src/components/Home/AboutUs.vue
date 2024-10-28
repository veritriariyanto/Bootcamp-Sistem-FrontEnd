<template>
  <section id="about">
    <div class="container mx-auto flex flex-col mt-20">
      <!-- Responsive colored bar -->
      <div class="flex flex-row">
        <div class="bg-x-light w-2/12 h-5"></div>
        <div class="bg-x-yellow w-7/12 h-5"></div>
        <div class="bg-x-blue w-3/12 h-5"></div>
      </div>
      <!-- Responsive content container -->
      <div
        class="flex flex-col lg:flex-row justify-between py-12 lg:py-24 px-8 lg:px-20 text-x-black items-start bg-x-lavender"
      >
        <div class="text-left lg:me-20 mb-10 lg:mb-0 lg:w-1/2">
          <h3 class="uppercase tracking-widest font-semibold text-base mb-5">
            About Us
          </h3>
          <h2
            class="leading-[36px] lg:leading-[48px] text-3xl lg:text-4xl font-semibold mb-5"
          >
            We are a community of <br />
            content writers who share their <br />
            learnings
          </h2>
          <p class="text-x-darkgrey mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" class="text-x-yellow font-bold">Read More ></a>
        </div>
        <!-- Mission Section -->
        <div class="lg:w-1/2">
          <h3 class="uppercase tracking-widest text-base mb-3 font-semibold">
            Our Mission
          </h3>
          <h2
            class="leading-[32px] lg:leading-[40px] text-2xl lg:text-3xl font-semibold"
          >
            Creating valuable content for <br />
            creatives all around the world
          </h2>
          <p class="text-x-darkgrey mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

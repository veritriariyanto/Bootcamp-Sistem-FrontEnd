<template>
  <div class="bg-x-black text-x-light">
    <div class="container mx-auto px-4 py-8">
      <!-- Navbar -->
      <div class="flex flex-wrap items-center justify-between">
        <img
          src="/src/assets/images/Home/logo.png"
          alt="logo"
          class="w-24 sm:w-32"
        />
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" class="hover:underline">Home</a>
          <a href="#" class="hover:underline">Blog</a>
          <a href="#" class="hover:underline">About us</a>
          <a href="#" class="hover:underline">Contact us</a>
          <a href="#" class="hover:underline">Privacy Policy</a>
        </div>
      </div>

      <!-- Subscription Section -->
      <div
        class="bg-x-darkgrey rounded-none p-8 mt-8 flex flex-wrap justify-center items-center"
      >
        <h2
          class="text-xl md:text-2xl font-bold mb-4 md:mb-0 w-full md:w-1/2 text-left md:text"
        >
          Subscribe to our newsletter to get <br class="hidden md:block" />
          latest updates and news
        </h2>
        <div
          class="flex flex-wrap md:w-1/2 space-y-4 md:space-y-0 justify-end md:space-x-4"
        >
          <input
            type="email"
            class="rounded-none py-2 px-3 w-full md:flex-1"
            placeholder="Enter Your Email"
          />
          <button
            class="bg-x-blue hover:bg-x-blue text-x-light font-bold py-2 px-4 rounded-none w-full md:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>

      <!-- Footer Section -->
      <div
        class="flex flex-wrap justify-between items-center mt-8 space-y-4 sm:space-y-0 text-center sm:text-left"
      >
        <p class="text-base w-full sm:w-auto">
          Finstreet <br />
          118 2561 Fintown
        </p>
        <p class="text-base w-full sm:w-auto">
          Hello@finsweet.com 020 7993 2905
        </p>
        <div class="flex justify-center space-x-4 w-full sm:w-auto">
          <a href="#"
            ><img
              src="/src/assets/images/Home/Icon/facebook.png"
              alt="facebook"
              class="w-6 h-6 bg-x-darkgrey"
          /></a>
          <a href="#"
            ><img
              src="/src/assets/images/Home/Icon/twiter.png"
              alt="twitter"
              class="w-6 h-6 bg-x-darkgrey"
          /></a>
          <a href="#"
            ><img
              src="/src/assets/images/Home/Icon/instagram.png"
              alt="instagram"
              class="w-6 h-6 bg-x-darkgrey"
          /></a>
          <a href="#"
            ><img
              src="/src/assets/images/Home/Icon/linkedin.png"
              alt="linkedin"
              class="w-6 h-6 bg-x-darkgrey"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

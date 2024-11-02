<template>
  <div
    class="font-xinter h-auto lg:h-[519px] flex flex-col lg:flex-row bg-x-lavender p-4 lg:p-8 text-x-black shadow-lg space-y-4 lg:space-y-0 lg:space-x-8"
  >
    <!-- Text Section -->
    <div class="flex-1 mt-6 lg:mt-12 text-center lg:text-left">
      <h2 class="text-sm lg:text-base font-semibold uppercase">
        Featured Post
      </h2>
      <h1 class="font-sans text-2xl lg:text-4xl font-bold my-2">
        Step-by-step guide to choosing great <br class="hidden lg:block" />
        font pairs
      </h1>
      <p class="text-xs lg:text-sm">
        By <span class="text-x-yellow">John Doe</span> | May 23, 2022
      </p>
      <p class="text-x-mediumgrey text-sm lg:text-base my-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat <br class="hidden lg:block" />
        nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <div class="flex justify-center lg:justify-start">
        <button
          class="btn py-4 px-12 bg-x-blue rounded-none border-none text-x-light"
        >
          <router-link to="/posts">Read More ></router-link>
        </button>
      </div>
    </div>

    <!-- Image Section -->
    <div class="h-52 lg:h-[359px] w-full lg:w-1/3 mt-6 lg:mt-11 ml-auto">
      <img
        src="/src/assets/images/Blog/BlogHeader.png"
        alt="Blog Header Image"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

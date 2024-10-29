<template>
  <div
    class="container mx-auto p-6 sm:p-12 lg:p-24 bg-x-lightyellow text-x-black h-auto"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-base font-xinter font-bold mb-4">TESTIMONIALS</h2>
        <h1 class="text-4xl font-bold mb-4">
          What people say
          <br />
          about our blog
        </h1>
        <p class="text-base font-xinter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <p class="text-2xl font-bold">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
        <div class="flex items-center gap-4 mt-10">
          <img
            class="rounded-full w-12 h-12"
            src="\src\assets\images\Home\testimonialIMG.png"
            alt="Jonathan Vallem"
          />
          <div>
            <h3 class="text-2xl font-bold">Jonathan Vallem</h3>
            <p class="text-base font-xinter">New York, USA</p>
          </div>
          <!-- Tambahkan panah di sini agar sejajar dengan profil -->
          <div class="flex justify-end ml-auto gap-2">
            <button
              class="bg-x-light h-12 w-12 group font-bold rounded-full flex items-center justify-center hover:bg-x-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 group-hover:text-x-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l-7 7m0 0l7 7m-7-7H20"
                />
              </svg>
            </button>
            <button
              class="bg-x-light h-12 w-12 group font-bold rounded-full flex items-center justify-center hover:bg-x-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 group-hover:text-x-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l7-7m0 0l-7-7m7 7H2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

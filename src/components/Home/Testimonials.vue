<template>
  <div class="container text-x-black mx-auto p-6 bg-x-lightyellow">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-base font-bold mb-4">TESTIMONIALS</h2>
        <h1 class="text-4xl font-bold mb-4">
          What people say
          <br />
          about our blog
        </h1>
        <p class="text-base">
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
            class="rounded-full w-12 h-12 md:w-16 md:h-16"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="Jonathan Vallem"
          />
          <div>
            <h3 class="text-2xl font-bold">Jonathan Vallem</h3>
            <p class="text-base">New york, USA</p>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l-7 7m0 0l7 7m-7-7H17"
              />
            </svg>
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H13"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

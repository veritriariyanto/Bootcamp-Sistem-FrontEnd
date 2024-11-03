<template>
  <div class="hero min-h-screen relative overflow-hidden text-x-light">
    <img
      src="\src\assets\images\Home\bg1.png"
      alt="Hero Background"
      class="absolute inset-0 w-full h-full object-cover transform scale-x-[1] z-0"
    />

    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_5%,_rgba(0,0,0,0.8))] z-5"
    ></div>
    <div
      class="hero flex flex-col lg:flex-row-reverse lg:justify-end relative z-10 bg-black bg-opacity-60 text-white p-10 lg:p-20"
    >
      <div class="lg:text-left">
        <h5 class="text-sm uppercase mb-2">
          Posted on <span class="font-bold">startup</span>
        </h5>
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
          Step-by-step guide to choosing <br />
          great font pairs
        </h1>
        <h5 class="text-sm my-4">
          By <span class="text-x-blue">James West</span> | May 23, 2022
        </h5>
        <p class="mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu <br />
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <route-link
          to
          href="/posts"
          class="btn bg-x-blue rounded-none border-none px-12 py-4 text-x-light"
          >Read More &gt;</route-link
        >
      </div>
    </div>
  </div>
</template>

<template>
  <div id="Category">
    <div class="container mx-auto mt-10 text-x-black">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="card p-4">
          <div
            class="card-body w-full h-56 hover:bg-x-blue hover:text-x-light shadow-lg rounded-none group"
          >
            <div class="mb-2">
              <img
                src="/src/assets/images/Home/Icon/icon1.png"
                alt="icon"
                class="w-12 h-12 bg-x-light roundedd"
              />
            </div>
            <h3 class="text-3xl font-semibold">
              <router-link to="/category">Business</router-link>
            </h3>
            <p
              class="text-base font-xinter text-x-mediumgrey group-hover:text-x-light"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="card p-4">
          <div
            class="card-body w-full h-56 hover:bg-x-blue hover:text-x-light shadow-lg rounded-none group"
          >
            <div class="mb-2">
              <img
                src="/src/assets/images/Home/Icon/icon2.png"
                alt="icon"
                class="w-12 h-12 bg-x-light rounded"
              />
            </div>
            <h3 class="text-3xl font-semibold">
              <router-link to="/category">Startup</router-link>
            </h3>
            <p
              class="text-base font-xinter text-x-mediumgrey group-hover:text-x-light"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="card p-4">
          <div
            class="card-body w-full h-56 hover:bg-x-blue hover:text-x-light shadow-lg rounded-none group"
          >
            <div class="mb-2">
              <img
                src="/src/assets/images/Home/Icon/icon3.png"
                alt="icon"
                class="w-12 h-12 bg-x-light rounded"
              />
            </div>
            <h3 class="text-3xl font-semibold">
              <router-link to="category">Economy</router-link>
            </h3>
            <p
              class="text-base font-xinter text-x-mediumgrey group-hover:text-x-light"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="card p-4">
          <div
            class="card-body w-full h-56 hover:bg-x-blue hover:text-x-light shadow-lg rounded-none group"
          >
            <div class="mb-2">
              <img
                src="/src/assets/images/Home/Icon/icon4.png"
                alt="icon"
                class="w-12 h-12 bg-x-light rounded"
              />
            </div>
            <h3 class="text-3xl font-semibold">
              <router-link to="/category">Technology</router-link>
            </h3>
            <p
              class="text-base font-xinter text-x-mediumgrey group-hover:text-x-light"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

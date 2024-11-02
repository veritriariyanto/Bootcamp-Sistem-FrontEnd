<!-- Header.vue -->
<template>
  <div class="navbar h-[80px] w-[full] bg-x-black font-xinter">
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl"
          ><img src="\src\assets\images\Home\Brand.png" alt="SISTEM"
        /></a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-x-light text-base">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>
      <div class="navbar-end font-sans">
        <a class="py-3 px-8 btn rounded-badge bg-x-blue text-x-light"
          >Contact Us</a
        >
      </div>
    </div>
  </div>
</template>

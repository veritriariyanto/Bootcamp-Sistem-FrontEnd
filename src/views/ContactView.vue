<template>
  <div class="bg-x-light">
    <HeaderContent />
    <div
      class="flex flex-col items-center justify-center min-h-screen p-4 py-20"
    >
      <div class="text-center mb-8 px-64 text-x-black">
        <h2 class="text-sm font-bold font-xinter">CONTACT US</h2>
        <h1 class="text-3xl font-bold mt-2">Let's Start a Conversation</h1>
        <p class="text-base font-xinter text-x-mediumgrey mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div
        class="bg-x-yellow text-x-darkgrey p-6 shadow-md mb-8 w-full max-w-lg"
      >
        <div class="flex content-start">
          <div>
            <h3 class="text-sm text-x-mediumgrey">Working hours</h3>
            <h5 class="text-xl mt-5 font-bold">
              Monday To Friday <br />9:00 AM to 8:00 PM
            </h5>
            <div class="text-sm text-x-mediumgrey">
              ur Support Team is available 24/7
            </div>
          </div>
          <div class="pl-8">
            <h3 class="text-sm text-x-mediumgrey">Contact Us</h3>
            <h5 class="text-xl mt-5 font-bold">020 7993 2905</h5>
            <p class="text-sm text-x-mediumgrey">hello@finssweet.com</p>
          </div>
        </div>
      </div>

      <form class="w-full max-w-lg">
        <div class="mb-4">
          <input
            class="w-full p-3 bg-x-light border border-x-mediumgrey placeholder:text-x-black"
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full p-3 border bg-x-light border-x-mediumgrey placeholder:text-x-black"
            placeholder="Your Email"
            type="email"
          />
        </div>
        <div class="flex mb-4">
          <div class="w-1/2 pr-2">
            <select
              class="w-full p-3 border rounded-none border-x-mediumgrey optional:text-x-black bg-x-light"
            >
              <option>Provinsi</option>
              <option>Aceh</option>
              <option>Bali</option>
              <option>Banten</option>
              <option>Bengkulu</option>
              <option>Central Java</option>
              <option>Central Kalimantan</option>
              <option>Central Sulawesi</option>
              <option>East Java</option>
              <option>East Kalimantan</option>
              <option>East Nusa Tenggara</option>
              <option>Gorontalo</option>
              <option>Jakarta</option>
              <option>Jambi</option>
              <option>Lampung</option>
              <option>Maluku</option>
              <option>North Kalimantan</option>
              <option>North Maluku</option>
              <option>North Sulawesi</option>
              <option>North Sumatra</option>
              <option>Papua</option>
              <option>Riau</option>
              <option>Riau Islands</option>
              <option>South Kalimantan</option>
              <option>South Sulawesi</option>
              <option>South Sumatra</option>
              <option>Southeast Sulawesi</option>
              <option>West Java</option>
              <option>West Kalimantan</option>
              <option>West Nusa Tenggara</option>
              <option>West Papua</option>
              <option>West Sulawesi</option>
              <option>West Sumatra</option>
              <option>Yogyakarta</option>
            </select>
          </div>
          <div class="w-1/2 pl-2 relative">
            <select
              class="w-full p-3 border rounded-none border-x-mediumgrey optional:text-x-black bg-x-light"
            >
              <option>Kota</option>
              <option class="aceh" value="banda-aceh">Banda Aceh</option>
              <option class="aceh" value="langsa">Langsa</option>
              <option class="aceh" value="lhokseumawe">Lhokseumawe</option>
              <option class="aceh" value="meulaboh">Meulaboh</option>
              <option class="aceh" value="sabangs">Sabang</option>
              <option class="aceh" value="subulussalam">Subulussalam</option>
            </select>
          </div>
        </div>
        <div class="mb-4">
          <textarea
            class="w-full p-3 border border-x-mediumgrey bg-x-light placeholder:text-x-black"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          class="w-full p-3 bg-x-blue text-white text-x-black font-bold"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>

    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "/src/components/HeaderContent.vue";

import FooterContent from "/src/components/FooterContent.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,

    FooterContent,
  },
};
</script>

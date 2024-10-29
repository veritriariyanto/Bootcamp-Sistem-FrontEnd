<template>
  <div
    class="flex justify-between items-center text-4xl text-x-black font-bold mt-10"
  >
    <div class="w-3/5">
      <a>Featured Post</a>
    </div>

    <div class="w-2/5">
      <p>ALL Posts</p>
    </div>
  </div>

  <div class="mx-auto px-4 bg-x-light text-x-black">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 text-black">
      <div class="col-span-3 rounded-lg shadow-md overflow-hidden">
        <div class="p-4">
          <img
            src="\src\assets\images\Home\Bg2.png"
            alt="Featured Post"
            class="h-[352px] mt-5"
          />
          <div class="mt-2 font-xinter text-sm">
            By <span class="text-x-yellow">John Doe</span> | May 23, 2022
          </div>
          <h3 class="text-3xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h3>
          <div class="py-5 font-xinter text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </div>
          <button
            class="py-4 px-12 btn text-x-light bg-x-blue font-bold rounded-none border-none text-base1"
          >
            Read More >
          </button>
        </div>
      </div>

      <div class="col-span-2 rounded-lg shadow-md overflow-hidden">
        <div class="p-4">
          <div class="grid grid-cols-1 gap-4 mt-4">
            <div class="rounded-lg shadow-md overflow-hidden">
              <div class="p-4 hover:bg-x-lightyellow">
                <div class="mt-2">
                  By <span class="text-x-yellow">John Doe</span> | May 23, 2022
                </div>
                <div class="text-2xl mt-4">
                  8 Figma design systems that<br />
                  you can download for free<br />
                  today.
                </div>
              </div>
            </div>
            <div class="rounded-lg shadow-md overflow-hidden">
              <div class="p-4 hover:bg-x-lightyellow">
                <div class="mt-2">
                  By <span class="text-x-yellow">John Doe</span> | May 23, 2022
                </div>
                <div class="text-2xl mt-4">
                  8 Figma design systems that<br />
                  you can download for free<br />
                  today.
                </div>
              </div>
            </div>
            <div class="rounded-lg shadow-md overflow-hidden">
              <div class="p-4 hover:bg-x-lightyellow">
                <div class="mt-2">
                  By <span class="text-x-yellow">John Doe</span> | May 23, 2022
                </div>
                <div class="text-2xl mt-4">
                  8 Figma design systems that<br />
                  you can download for free<br />
                  today.
                </div>
              </div>
            </div>
            <div class="rounded-lg shadow-md overflow-hidden">
              <div class="p-4 hover:bg-x-lightyellow">
                <div class="mt-2">
                  By <span class="text-x-yellow">John Doe</span> | May 23, 2022
                </div>
                <div class="text-2xl mt-4">
                  8 Figma design systems that<br />
                  you can download for free<br />
                  today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

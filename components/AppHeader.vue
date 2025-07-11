<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { NAVIGATION_ITEMS } from '~/constants'

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  function onScroll() {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<template>
  <div>
    <div
      :class="[
        'fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full flex gap-3 items-center transition-all duration-300 ease-in-out hidden sm:flex',
        scrolled 
          ? 'bg-transparent shadow-none' 
          : 'bg-white shadow-lg px-6 py-3'
      ]"
    >
      <a
        v-for="item in NAVIGATION_ITEMS"
        :key="item.text"
        :href="item.href"
        class="text-gray-600 font-medium font-inter no-underline transition-colors duration-300 cursor-pointer hover:text-black"
      >
        {{ item.text }}
      </a>
    </div>

    <div
      v-if="scrolled"
      class="fixed top-0 left-0 w-full h-15 bg-white/70 backdrop-blur-md z-40 border-b border-black/10"
    />

    <a
      href="#"
      :class="[
        'fixed right-4 sm:right-8 bg-black text-white px-4 py-2 rounded-full font-semibold font-inter no-underline z-50 transition-all duration-300 ease-in-out whitespace-nowrap text-sm sm:text-base',
        scrolled ? 'top-2.5 sm:top-2.5' : 'top-4.5 sm:top-4.5'
      ]"
    >
      Открыть
    </a>

    <div
      :class="[
        'fixed left-4 sm:left-8 flex items-center gap-2 font-inter font-semibold text-gray-900 no-underline z-50 transition-all duration-300 ease-in-out text-sm sm:text-base',
        scrolled ? 'top-4 sm:top-4' : 'top-6 sm:top-6'
      ]"
    >
      <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gray-900" />
      vectorify
    </div>
  </div>
</template>

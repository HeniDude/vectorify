<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { NAVIGATION_ITEMS } from '~/constants'

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
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
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-8 py-3 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-transparent'
      ]"
    >
      <div class="flex items-center gap-2 font-inter font-semibold text-gray-900 text-sm lg:text-base">
        <div class="w-5 h-5 lg:w-6 lg:h-6 rounded-md bg-gray-900" />
        vectorify
      </div>

      <div class="hidden xl:flex items-center gap-6">
        <a
          v-for="item in NAVIGATION_ITEMS"
          :key="item.text"
          :href="item.href"
          class="text-gray-600 font-medium font-inter no-underline transition-colors duration-300 cursor-pointer hover:text-black"
        >
          {{ item.text }}
        </a>
      </div>

      <button
        @click="toggleMobileMenu"
        class="flex xl:hidden items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50"
      >
        <div class="w-5 h-5 flex flex-col justify-center items-center">
          <span 
            :class="[
              'w-5 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out rounded-full',
              isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
            ]"
          />
          <span 
            :class="[
              'w-5 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out rounded-full',
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            ]"
          />
          <span 
            :class="[
              'w-5 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out rounded-full',
              isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
            ]"
          />
        </div>
      </button>

      <a
        href="#"
        class="hidden xl:block bg-black text-white px-4 py-2 rounded-xl font-semibold font-inter no-underline text-base transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-gray-800 shadow-sm"
      >
        Открыть
      </a>
    </div>

    <div
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
      class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 xl:hidden"
    />

    <div
      :class="[
        'fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out xl:hidden',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between p-6 border-b border-gray-100">
          <div class="flex items-center gap-2 font-inter font-semibold text-gray-900">
            <div class="w-6 h-6 rounded-md bg-gray-900" />
            vectorify
          </div>
          <button
            @click="closeMobileMenu"
            class="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex-1 p-6">
          <div class="space-y-6">
            <a
              v-for="item in NAVIGATION_ITEMS"
              :key="item.text"
              :href="item.href"
              @click="closeMobileMenu"
              class="block text-2xl font-medium font-inter text-gray-900 no-underline transition-colors duration-300 cursor-pointer hover:text-gray-600 py-3"
            >
              {{ item.text }}
            </a>
          </div>
        </nav>

        <div class="p-6 border-t border-gray-100">
          <a
            href="#"
            @click="closeMobileMenu"
            class="block w-full bg-black text-white px-6 py-4 rounded-xl font-semibold font-inter no-underline text-center transition-all duration-300 ease-in-out text-lg hover:bg-gray-800 shadow-sm"
          >
            Открыть
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

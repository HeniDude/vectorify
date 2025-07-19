<script setup lang="ts">
import { HERO_WORDS } from "~/constants";

const index = ref(0);
const fadeOut = ref(false);
const animatingWord = ref(HERO_WORDS[0]);

onMounted(() => {
  const interval = setInterval(() => {
    fadeOut.value = true;

    setTimeout(() => {
      const nextIndex = (index.value + 1) % HERO_WORDS.length;
      animatingWord.value = HERO_WORDS[nextIndex];
      index.value = nextIndex;
      fadeOut.value = false;
    }, 200);
  }, 3000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 pt-8"
  >
    <h1
      class="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-[3.75rem] xl:text-6xl font-bold text-center leading-tight sm:leading-[1.25] md:leading-[1.15] mt-8 px-4"
    >
      Векторные иллюстрации <br class="hidden sm:block" />
      для
      <span class="inline-block min-w-24 text-left">
        <span
          v-for="(char, i) in animatingWord.text.split('')"
          :key="i"
          :style="{
            display: 'inline-block',
            opacity: fadeOut ? 0 : 1,
            transform: fadeOut ? 'translateY(0px)' : 'translateY(0px)',
            animation: fadeOut
              ? 'none'
              : i === 0
              ? 'letterFadeIn 0s ease 0s both'
              : `letterFadeIn 0.4s ease ${i * 0.09}s both`,
            color: animatingWord.color,
          }"
        >
          {{ char }}
        </span>
      </span>
    </h1>

    <p
      class="mt-4 max-w-xl text-center text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-4"
    >
      <span class="whitespace-nowrap"
        >Векторные иллюстрации под ваш стиль — быстро и без дизайнера. </span
      ><br class="hidden sm:block" />
      <span class="whitespace-nowrap"
        >Настраиваемые SVG для сайта, приложений и рекламы — за пару
        кликов.</span
      >
    </p>

    <a
      href="https://твоя-ссылка.ру"
      class="bg-black text-white px-4 sm:px-6 py-3 sm:py-5 rounded-full font-semibold font-inter no-underline inline-block text-center mt-6 sm:mt-8 cursor-pointer transition-colors duration-300 text-sm sm:text-base md:text-lg mx-4 hover:bg-gray-700"
    >
      Попробовать бесплатно →
    </a>
  </div>
</template>

<style scoped>
@keyframes letterFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

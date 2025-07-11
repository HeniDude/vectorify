<script setup lang="ts">
import { FEATURES_PROBLEMS, FEATURES_ICON_COLORS, FEATURES_ICONS } from '~/constants'
</script>

<template>
  <div id="explore" class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 bg-transparent">
    <h2
      class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-gray-800 text-center mb-8 sm:mb-12 font-inter"
    >
      Тяжело найти подходящие иллюстрации?
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
      <div
        v-for="(text, idx) in FEATURES_PROBLEMS"
        :key="idx"
        class="bg-white rounded-3xl shadow-lg min-h-40 w-full flex items-center font-inter text-base sm:text-lg font-medium text-gray-700 p-4 sm:p-6 text-left"
      >
        <div
          class="p-3 sm:p-4 rounded-full flex justify-center items-center mr-4 sm:mr-5 min-w-12 min-h-12 flex-shrink-0 text-2xl"
          :style="{ backgroundColor: FEATURES_ICON_COLORS[idx] }"
        >
          {{ FEATURES_ICONS[idx] }}
        </div>

        <div>{{ text }}</div>
      </div>
    </div>
  </div>
</template>

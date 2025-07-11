<script setup lang="ts">
import { ref } from "vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import { FAQ_ITEMS } from '~/constants'

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white text-black" id="faq">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 text-center">FAQ</h2>
      <div class="space-y-6">
        <div
          v-for="(item, index) in FAQ_ITEMS"
          :key="index"
          class="max-w-3xl mx-auto pt-4 pb-4"
        >
          <div
            @click="toggle(index)"
            role="button"
            tabindex="0"
            @keydown="(e) => e.key === 'Enter' && toggle(index)"
            class="text-lg sm:text-xl md:text-2xl flex justify-between items-center text-left font-medium text-black px-4 sm:px-6 pt-0 pb-6 cursor-pointer select-none"
          >
            <span>{{ item.question }}</span>
            <ChevronUp v-if="openIndex === index" :size="20" />
            <ChevronDown v-else :size="20" />
          </div>

          <div
            v-if="openIndex === index"
            class="text-gray-600 text-sm sm:text-base leading-relaxed px-4 sm:px-6"
          >
            {{ item.answer }}
          </div>

          <!-- Горизонтальная линия (только если не последний) -->
          <div
            v-if="index !== FAQ_ITEMS.length - 1"
            class="h-px bg-gray-300 mx-auto w-full rounded"
          />
        </div>
      </div>
    </div>
  </section>
</template>

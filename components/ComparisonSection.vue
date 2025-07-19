<script setup lang="ts">
const billingPeriod = ref<"monthly" | "yearly">("yearly");
</script>

<template>
  <div
    class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-transparent text-center font-inter"
  >
    <h2
      class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
    >
      Создавайте стильные векторные иллюстрации за пару
      <span class="text-orange-500">минут</span>
    </h2>

    <p
      class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
    >
      Забудьте про долгие правки и дорогой дизайн —
      <br class="hidden sm:block" />
      <span class="text-orange-500">сэкономьте до 99%</span> времени и бюджета
    </p>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16 max-w-6xl mx-auto"
    >
      <div
        class="bg-white rounded-2xl shadow-lg shadow-[inset_0_8px_8px_-8px_rgba(0,0,0,0.1)] p-6 sm:p-8 text-base font-normal text-gray-700 text-left leading-relaxed"
      >
        <div class="flex items-center mb-3">
          <div class="text-xl sm:text-2xl font-semibold flex-grow">
            ⏳ Традиционный подход
          </div>
          <div
            class="bg-red-100 text-red-700 rounded-full px-4 py-1.5 font-bold text-base whitespace-nowrap shadow-lg"
          >
            5 – 9 часов
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-3 sm:p-4 mb-3">
          <div class="flex justify-between items-center">
            <strong>🔍 Ручной сбор данных</strong>
            <span>1 – 2 часов</span>
          </div>
          <div>Куча данных и источников</div>
        </div>

        <div class="bg-gray-50 rounded-xl p-3 sm:p-4 mb-3">
          <div class="flex justify-between items-center">
            <strong>✏️ Планирование дизайна</strong>
            <span>1 – 2 часов</span>
          </div>
          <div>Креативные затыки</div>
        </div>

        <div class="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4">
          <div class="flex justify-between items-center">
            <strong>🎨 Создание визуала</strong>
            <span>2 – 3 часов</span>
          </div>
          <div>Технические ограничения и сложные инструменты</div>
        </div>

        <div class="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4">
          <div class="flex justify-between items-center">
            <strong>🔧 Проверка и правки</strong>
            <span>1 – 2 часов</span>
          </div>
          <div>Постоянные правки и оптимизации</div>
        </div>

        <div class="font-semibold text-red-500">Стоимость: от $350+</div>
      </div>

      <div
        class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-base font-normal text-gray-700 text-left leading-relaxed"
      >
        <div class="flex items-center mb-3">
          <div class="text-xl sm:text-2xl font-semibold flex-grow">
            🚀 AI-подход
          </div>
          <div
            class="bg-green-100 text-green-700 rounded-full px-4 py-1.5 font-bold text-base whitespace-nowrap shadow-lg"
          >
            2 минуты
          </div>
        </div>

        <div class="bg-green-50 rounded-xl p-3 sm:p-4 mb-3">
          <div class="flex justify-between items-center">
            <strong class="text-green-700">🧠 Умный анализ</strong>
            <span></span>
          </div>
          <div>Мгновенная обработка и точные инсайты</div>
        </div>

        <div class="bg-green-50 rounded-xl p-3 sm:p-4 mb-3">
          <div class="flex justify-between items-center">
            <strong class="text-green-700">⚡ Молниеносная скорость</strong>
            <span></span>
          </div>
          <div>Создавайте за секунды, а не часы</div>
        </div>

        <div class="bg-green-50 rounded-xl p-3 sm:p-4 mb-3">
          <div class="flex justify-between items-center">
            <strong class="text-green-700">🎯 Выверенная визуализация</strong>
            <span></span>
          </div>
          <div>100% выверенный результат</div>
        </div>

        <div class="bg-green-50 rounded-xl p-3 sm:p-4 mb-4">
          <div class="flex justify-between items-center">
            <strong class="text-green-700">✨ Творческая свобода</strong>
            <span>Без ограничений</span>
          </div>
          <div>Бесконечные возможности</div>
        </div>

        <div class="font-semibold text-green-600">
          Стоимость: $0.5 за дизайн
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-900 text-white py-8 sm:py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        <div class="col-span-1 sm:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-white rounded-lg"></div>
            <span class="text-xl font-bold">vectorify</span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md">
            Векторные иллюстрации под ваш стиль — быстро и без дизайнера.
            Настраиваемые SVG для сайта, приложений и рекламы.
          </p>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Продукт</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#" class="text-white transition-colors no-underline">Возможности</a>
            </li>
            <li>
              <a href="#" class="text-white transition-colors no-underline">Тарифы</a>
            </li>
            <li>
              <a href="#" class="text-white transition-colors no-underline">API</a>
            </li>
            <li>
              <a href="#" class="text-white transition-colors no-underline">Интеграции</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Поддержка</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#" class="text-white transition-colors no-underline">Документация</a>
            </li>
            <li>
              <a href="#" class="text-white transition-colors no-underline">FAQ</a>
            </li>
            <li>
              <a href="#" class="text-white transition-colors no-underline">Контакты</a>
            </li>
            <li>
              <a href="#" class="text-white transition-colors no-underline">Статус</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center"
      >
        <p class="text-gray-400 text-sm">
          © 2024 Vectorify. Все права защищены.
        </p>
        <div class="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <a
            href="#"
            class="text-gray-400 hover:text-white transition-colors text-sm no-underline"
            >Политика конфиденциальности</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-white transition-colors text-sm no-underline"
            >Условия использования</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

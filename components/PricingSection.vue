<script setup lang="ts">
import { PRICING_PLANS } from "~/constants";

const billingPeriod = ref<"monthly" | "yearly">("yearly");

const periods: ("monthly" | "yearly")[] = ["monthly", "yearly"];

const getButtonColor = (period: "monthly" | "yearly") => {
  if (billingPeriod.value === period) {
    return period === 'monthly' ? '#000' : '#fff';
  }
  return '#6b7280';
};
</script>

<template>
  <div id="pricing" class="max-w-[1000px] mx-auto py-20 px-5 font-sans">
    <h2
      class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-center mb-6 sm:mb-8 px-4"
    >
      Тарифы
    </h2>
    <p
      class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
    >
      Попробуйте бесплатно прямо сейчас. Без привязки карты и регистрации.<br
        class="hidden sm:block"
      />
    </p>

    <div class="flex justify-center mb-6 sm:mb-8 px-4">
      <div class="relative flex bg-gray-100 rounded-full p-1.5 w-fit shadow-sm border border-gray-200">
        <div
          :class="[
            'absolute top-1.5 h-[calc(100%-12px)] bg-black rounded-full transition-all duration-300 ease-in-out shadow-sm',
            billingPeriod === 'monthly' ? 'left-1.5 w-[calc(50%-12px)]' : 'left-[calc(50%+6px)] w-[calc(50%-12px)]'
          ]"
        />

        <button
          v-for="period in periods"
          :key="period"
          @click="billingPeriod = period"
          :class="[
            'toggle-button',
            billingPeriod === period ? 'toggle-button-active' : ''
          ]"
        >
          <span v-if="period === 'monthly'">Месяц</span>
          <span v-else>
            Год <span class="text-xs opacity-80">(-20%)</span>
          </span>
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8 px-4"
    >
      <div
        v-for="(plan, idx) in PRICING_PLANS"
        :key="idx"
        :style="{
          backgroundColor: plan.highlighted ? '#fef3c7' : '#fff',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
          textAlign: 'left',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }"
      >
        <h3 class="text-[1.5rem] font-[600] mb-[4px]">
          {{ plan.title }}
        </h3>
        <p class="text-[#6b7280] mb-[12px]">
          {{ plan.description }}
        </p>
        <div class="mb-[16px]">
          <div style="font-size: 2rem; font-weight: 700">
            <span v-if="billingPeriod === 'yearly'">
              <span>{{ plan.price.yearly }}</span>
              <span
                style="
                  text-decoration: line-through;
                  color: #9ca3af;
                  font-size: 1.5rem;
                  margin-left: 0.75rem;
                "
              >
                {{ plan.price.monthly }}
              </span>
            </span>
            <span v-else>{{ plan.price.monthly }}</span>
          </div>
          <div
            v-if="billingPeriod === 'yearly'"
            style="font-size: 0.85rem; color: #6b7280; margin-top: 4px"
          >
            при оплате за год
          </div>
        </div>

        <ul style="list-style: none; padding: 0; margin-bottom: 16px; flex-grow: 1">
          <li
            v-for="(feature, i) in plan.features"
            :key="i"
            style="margin-bottom: 8px; color: #374151"
          >
            ✅ {{ feature }}
          </li>
        </ul>
        <button
          @click="navigateTo('https://your-link.com')"
          style="
            background-color: #111827;
            color: #fff;
            border: none;
            border-radius: 9999px;
            padding: 12px 20px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            margin-top: auto;
          "
        >
          Выбрать
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 20px;
  font-family: "Inter", sans-serif;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #111827;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 2rem;
}

.billing-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.toggle-container {
  position: relative;
  display: flex;
  background-color: #e5e7eb;
  border-radius: 9999px;
  padding: 4px;
  width: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.toggle-slider {
  position: absolute;
  top: 4px;
  height: calc(100% - 8px);
  background-color: #111827;
  border-radius: 9999px;
  transition: all 0.3s ease;
  z-index: 0;
}

.toggle-button {
  position: relative;
  z-index: 1;
  width: 140px;
  padding: 10px 16px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #6b7280;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-button:hover {
  color: #374151;
}

.toggle-button-active {
  color: #ffffff !important;
  font-weight: 700;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>

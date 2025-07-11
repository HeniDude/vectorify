<script setup lang="ts">
import { PRICING_PLANS } from '~/constants'

const billingPeriod = ref<'monthly' | 'yearly'>('yearly')

const periods: ('monthly' | 'yearly')[] = ['monthly', 'yearly']
</script>

<template>
  <div
    id="pricing"
    style="
      max-width: 1000px;
      margin: 0 auto;
      padding: 80px 20px;
      font-family: Inter, sans-serif;
    "
  >
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-center mb-6 sm:mb-8 px-4">
      Тарифы
    </h2>
    <p
      class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
    >
      Попробуйте бесплатно прямо сейчас. Без привязки карты и регистрации.<br class="hidden sm:block" />
    </p>

    <div class="flex justify-center mb-6 sm:mb-8 px-4">
      <div
        style="
          position: relative;
          display: flex;
          background-color: #e5e7eb;
          border-radius: 9999px;
          padding: 4px;
          width: fit-content;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        "
      >
        <div
          :style="{
            position: 'absolute',
            top: 4,
            left: billingPeriod === 'monthly' ? 4 : 'calc(50% + 4px)',
            width: 'calc(50% - 8px)',
            height: 'calc(100% - 8px)',
            backgroundColor: '#111827',
            borderRadius: '9999px',
            transition: 'all 0.3s ease',
            zIndex: 0,
          }"
        />

        <button
          v-for="period in periods"
          :key="period"
          @click="billingPeriod = period"
          :style="{
            position: 'relative',
            zIndex: 1,
            width: '130px',
            padding: '8px 12px',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '1rem',
            color: billingPeriod === period ? '#fff' : '#374151',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }"
        >
          <span v-if="period === 'monthly'">Месяц</span>
          <span v-else>
            Год <span style="font-size: 0.85rem; opacity: 0.8">(-20%)</span>
          </span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8 px-4">
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
        }"
      >
        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 4px">{{ plan.title }}</h3>
        <p style="color: #6b7280; margin-bottom: 12px">{{ plan.description }}</p>
        <div style="margin-bottom: 16px">
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
          <div v-if="billingPeriod === 'yearly'" style="font-size: 0.85rem; color: #6b7280; margin-top: 4px">
            при оплате за год
          </div>
        </div>

        <ul style="list-style: none; padding: 0; margin-bottom: 16px">
          <li v-for="(feature, i) in plan.features" :key="i" style="margin-bottom: 8px; color: #374151">
            ✅ {{ feature }}
          </li>
        </ul>
        <button
          @click="navigateTo('https://your-link.com')"
          style="
            backgroundColor: #111827;
            color: #fff;
            border: none;
            borderRadius: 9999px;
            padding: 12px 20px;
            fontWeight: 600;
            cursor: pointer;
            width: 100%;
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
  width: 130px;
  padding: 8px 12px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  color: #374151;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.toggle-button.active {
  color: #fff;
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


<script setup lang="ts">
defineProps<{
  plan: {
    title: string;
    description: string;
    price: {
      monthly: string;
      yearly: string;
    };
    features: string[];
    highlighted: boolean;
  };
  billingPeriod: "monthly" | "yearly";
}>();
</script>

<template>
  <div class="pricing-card">
    <h3 class="card-title">{{ plan.title }}</h3>
    <p class="card-description">{{ plan.description }}</p>

    <div class="price-container">
      <div class="price">
        <span v-if="billingPeriod === 'yearly'">
          {{ plan.price.yearly }}
          <span class="original-price">{{ plan.price.monthly }}</span>
        </span>
        <span v-else>{{ plan.price.monthly }}</span>
      </div>
      <div v-if="billingPeriod === 'yearly'" class="billing-note">
        при оплате за год
      </div>
    </div>

    <ul class="features-list">
      <li v-for="(feature, i) in plan.features" :key="i" class="feature-item">
        ✅ {{ feature }}
      </li>
    </ul>

    <button class="select-button">Выбрать</button>
  </div>
</template>

<style scoped>
.pricing-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: left;
  font-family: "Inter", sans-serif;
  transition: transform 0.3s ease;
}

.pricing-card.highlighted {
  background-color: #fef3c7;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.card-description {
  color: #6b7280;
  margin-bottom: 12px;
}

.price-container {
  margin-bottom: 16px;
}

.price {
  font-size: 2rem;
  font-weight: 700;
}

.original-price {
  text-decoration: line-through;
  color: #9ca3af;
  font-size: 1.5rem;
  margin-left: 0.75rem;
}

.billing-note {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 4px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
}

.feature-item {
  margin-bottom: 8px;
  color: #374151;
}

.select-button {
  background-color: #111827;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.select-button:hover {
  background-color: #374151;
}
</style>

<template>
  <div class="image-carousel">
    <div class="carousel-container">
      <div class="carousel-column">
        <div
          class="carousel-track"
          :style="{ transform: `translateY(${position1}px)` }"
        >
          <div
            v-for="(image, index) in images1"
            :key="`col1-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
          <div
            v-for="(image, index) in images1"
            :key="`col1-dup-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-column">
        <div
          class="carousel-track"
          :style="{ transform: `translateY(${position2}px)` }"
        >
          <div
            v-for="(image, index) in images2"
            :key="`col2-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
          <div
            v-for="(image, index) in images2"
            :key="`col2-dup-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-column">
        <div
          class="carousel-track"
          :style="{ transform: `translateY(${position3}px)` }"
        >
          <div
            v-for="(image, index) in images3"
            :key="`col3-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
          <div
            v-for="(image, index) in images3"
            :key="`col3-dup-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-column">
        <div
          class="carousel-track"
          :style="{ transform: `translateY(${position4}px)` }"
        >
          <div
            v-for="(image, index) in images4"
            :key="`col4-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
          <div
            v-for="(image, index) in images4"
            :key="`col4-dup-${index}`"
            class="carousel-item"
          >
            <div class="image-container">
              <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const allImages = [
  '/images/laptop-connected-to-a-server--clean-minimal-tech-i.png',
  '/images/-simple-flat-vector-of-organizational-chart-with-s.png',
  '/images/-vector-portrait-of-a-surprised-woman--clean-blog-.png',
  '/images/-flat-warm-toned-cup-of-coffee-with-steam--cozy-an.png',
  '/images/-vector-icon-set-of-social-media-elements--heart--.png',
  '/images/-modern-cityscape-with-minimal-detail--line-art-st.png',
  '/images/-vector-icon-set-of-social-media-elements--heart-- (1).png',
  '/images/-abstract-colorful-burst-symbolizing-creativity--d.png',
  '/images/-business-meeting-between-two-people-at-a-desk--mi.png',
  '/images/-person-reading-book-at-a-desk--simple-cozy-worksp.png',
  '/images/-adorable-blue-cartoon-alien-character-sitting--cu.png',
  '/images/-simple-illustration-of-a-person-riding-a-bike-in-.png',
  '/images/-person-reading-book-at-a-desk--simple-cozy-worksp (1).png',
  '/images/-minimal-line-art-of-a-cozy-street-coffee-shop--cl.png',
  '/images/-two-scientists-discussing-formulas-on-whiteboard-.png',
  '/images/-handwritten-brush-typography-that-says--warrin---.png',
  '/images/-cute-vector-illustration-of-two-friendly-dogs-sit.png',
  '/images/-cute-cartoon-coffee-mug-with-happy-face--minimali.png'
]


const images1 = [...allImages.slice(0, 6), ...allImages.slice(6, 12), ...allImages.slice(12, 18)]
const images2 = [...allImages.slice(6, 12), ...allImages.slice(12, 18), ...allImages.slice(0, 6)]
const images3 = [...allImages.slice(12, 18), ...allImages.slice(0, 6), ...allImages.slice(6, 12)]
const images4 = [...allImages.slice(3, 9), ...allImages.slice(9, 15), ...allImages.slice(15, 18), ...allImages.slice(0, 3)]

const ITEM_HEIGHT = 160
const VISIBLE_COUNT = 4
const SPEED = 0.5

const maxOffset = allImages.length * ITEM_HEIGHT

const position1 = ref(-maxOffset)
const position2 = ref(0)
const position3 = ref(-maxOffset)
const position4 = ref(0)

let animationFrame: number

function animate() {
  position1.value += SPEED
  position3.value += SPEED
  position2.value -= SPEED
  position4.value -= SPEED

  if (position1.value >= 0) position1.value = -maxOffset
  if (position3.value >= 0) position3.value = -maxOffset
  if (position2.value <= -maxOffset) position2.value = 0
  if (position4.value <= -maxOffset) position4.value = 0

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animationFrame = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.image-carousel {
  width: 600px;
  margin: 0 auto;
  padding: 40px 0;
}
.carousel-container {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .carousel-column:nth-child(4) {
    display: none;
  }
  
  .image-carousel {
    width: 100%;
    max-width: 520px;
    padding: 20px 10px;
  }
  
  .carousel-container {
    gap: 12px;
  }
  
  .carousel-column {
    width: 140px;
    height: 560px;
  }
  
  .carousel-item {
    height: 140px;
  }
  
  .image-container {
    width: 110px;
    height: 110px;
  }
}
.carousel-column {
  width: 160px;
  height: 640px;
  overflow: hidden;
  border-radius: 16px;
  background: #f5f5f5;
  box-shadow: 0 2px 8px #0001;
  position: relative;
}

.carousel-column::before,
.carousel-column::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 60px;
  pointer-events: none;
  z-index: 10;
}

.carousel-column::before {
  top: 0;
  background: linear-gradient(to bottom, 
    rgba(245, 245, 245, 1) 0%, 
    rgba(245, 245, 245, 0.8) 50%, 
    rgba(245, 245, 245, 0) 100%);
}

.carousel-column::after {
  bottom: 0;
  background: linear-gradient(to top, 
    rgba(245, 245, 245, 1) 0%, 
    rgba(245, 245, 245, 0.8) 50%, 
    rgba(245, 245, 245, 0) 100%);
}
.carousel-track {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.carousel-item {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-container {
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
</style> 
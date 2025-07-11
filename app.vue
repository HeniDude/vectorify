<template>
  <div>
    <AppHeader />
    
    <HeroSection />
    
    <SvgSection />
    
    <FeaturesSection />
    
    <ComparisonSection />
    
    <PricingSection />
    
    <FaqSection />
    
    <AppFooter />
  </div>
</template>

<style>

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  scroll-padding-top: 80px;
}

body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  max-width: 100vw;
}

* {
  box-sizing: border-box;
}


#__nuxt {
  overflow-x: hidden;
  max-width: 100vw;
}

html {
  scroll-behavior: smooth;
}

[id] {
  scroll-margin-top: 100px;
}
</style>

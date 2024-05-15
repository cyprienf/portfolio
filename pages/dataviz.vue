<template>
  <div class="dataviz-page">
    <AppHeader />

    <TitleComponent label="📊 Data Visualization" size="xlarge" />

    <p>Work in progress</p>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.dataviz-page {
  padding: 1.5rem 10rem 1rem 10rem;

  @media (width <= 768px) {
    padding: 2rem 2rem 1rem 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xxlarge;
}
</style>

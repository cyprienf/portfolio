<template>
  <div class="main">
    <AppHeader />
    <AboutSection />
    <WorksSection />
    <SkillsSection />
    <ProjectsSection />
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: $page-padding;

  @media (width <= $breakpoint-medium) {
    padding: $page-padding-medium-devices;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xlarge;
}
</style>

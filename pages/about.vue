<template>
  <div class="about-page">
    <AppHeader />

    <TitleComponent label="👨🏻‍💻 About me" size="xlarge" />

    <div class="about-page__infos">
      <p class="about-page__infos__welcome">
        Welcome to my portfolio! I’m Cyprien and there are few things about me:
      </p>

      <ul class="about-page__infos__list">
        <li>I am a 27 years old IT engineer from Lyon, France 🇫🇷.</li>

        <li>
          I love watching movies and reading books, my favorite genres are science-fiction, history
          and adventure. I use
          <NuxtLink to="https://firecore.com/infuse" target="_blank">Infuse</NuxtLink> to stream
          movies from my Synology NAS to my 🍎 Apple TV 4K. You can check my movies history on my
          <NuxtLink to="https://trakt.tv/users/cyprienf" target="_blank">Trakt account</NuxtLink>.
          My books history is also available on my
          <NuxtLink
            to="https://www.goodreads.com/user/show/178614114-cyprien-floquet"
            target="_blank"
            >Goodreads profile</NuxtLink
          >.
        </li>

        <li>
          I start playing 🎹 piano by the end of 2020 during covid period. I mainly learn classical
          and film scores.
        </li>

        <li>
          I love to work with Vue ecosystem (Vue / Nuxt). Currently I am learning some backend
          technologies (Fastify / Prisma). And I try to acquire some devops skills with GCP and
          Github Actions. You can find all my open source projects on my
          <NuxtLink to="https://github.com/CyprienF" target="_blank">Github account</NuxtLink> and
          my work experiments on my
          <NuxtLink to="https://www.linkedin.com/in/cyprien-floquet-095165109/" target="_blank"
            >LinkedIn profile</NuxtLink
          >.
        </li>

        <li>
          Another area I really enjoy is 📊 data visualization. I use the D3.js and Leaflet
          libraries to create dashboards, graphs and maps. You can find all my dataviz projects
          <NuxtLink to="/dataviz">here</NuxtLink> and on my
          <NuxtLink to="https://observablehq.com/@cyprienf" target="_blank"
            >Observable profile</NuxtLink
          >.
        </li>

        <li>
          I use a 💻 Macbook Pro to develop web applications with some softwares and websites:
          VSCode, CodeRunner, TablePlus, iTerm, Insomnia, Trello, Notion, To Do, Slack, Firefox and
          Alfred.
        </li>

        <li>
          To deploy applications I mainly use Netlify, Supabase and Google Cloud Plateform (Cloud
          Run). And to deploy automatically I work with Github Actions.
        </li>
      </ul>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.about-page {
  padding: $page-padding;

  @media (width <= $breakpoint-medium) {
    padding: $page-padding-medium-devices;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xlarge;

  &__infos {
    &__welcome {
      font-size: calc($font-medium * 1.1);
      margin-bottom: $spacing-medium;
    }

    &__list {
      list-style: inside;
      font-size: calc($font-medium * 1.05);
      line-height: $line-height-xlarge;

      a {
        text-decoration: underline;
      }

      li {
        margin-bottom: $spacing-xsmall;
      }
    }
  }
}
</style>

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
          and adventure. I use <a href="https://firecore.com/infuse" target="_blank">Infuse</a> to
          stream movies from my Synology NAS to my 🍎 Apple TV 4K. You can check my movies history
          on my <a href="https://trakt.tv/users/cyprienf" target="_blank">Trakt account</a>.
        </li>

        <li>
          I start playing 🎹 piano by the end of 2020 during covid period. I mainly learn classical
          and film scores.
        </li>

        <li>
          I love to work with Vue ecosystem (Vue / Nuxt). Currently I am learning some backend
          technologies (NestJS / Prisma). And I try to acquire some devops skills with GCP and
          Github Actions. You can find all my open source projects on my
          <a href="https://github.com/CyprienF" target="_blank">Github account</a> and my work
          experiments on my
          <a href="https://www.linkedin.com/in/cyprien-floquet-095165109/" target="_blank"
            >LinkedIn profile</a
          >.
        </li>

        <li>
          Another area I really enjoy is 📊 data visualization. I use the D3.js and Leaflet
          libraries to create dashboards, graphs and maps. You can find all my data viz projects
          <NuxtLink to="/dataviz">here</NuxtLink> and on my
          <a href="https://observablehq.com/@cyprienf" target="_blank">Observable profile</a>.
        </li>

        <li>
          I use a 💻 Macbook Pro to develop web apps with some softwares and websites: VSCode,
          CodeRunner, TablePlus, iTerm, Insomnia, Trello, Notion, To Do, Slack, Firefox and Alfred.
        </li>

        <li>
          To deploy applications I use Netlify, Supabase and Google Cloud Plateform. I use Github
          Actions to deploy automatically.
        </li>
      </ul>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.about-page {
  padding: 1.5rem 10rem 1rem 10rem;

  @media (width <= 768px) {
    padding: 2rem 2rem 1rem 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xxlarge;

  &__infos {
    &__welcome {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    &__list {
      list-style: inside;
      font-size: 1.05rem;
      line-height: 1.5;

      a {
        text-decoration: underline;
      }

      li {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>

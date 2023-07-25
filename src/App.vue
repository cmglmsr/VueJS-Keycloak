<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LoginButton from "@/components/LoginButton.vue";
</script>

<template>
  <header>
    <div class="disp">
      <img alt="Vue logo" class="logo" src="./assets/tr7-logo.png" width="350" height="125" />
      <div class="wrapper" style="padding: 30px">
        <HelloWorld msg="TR7 Management Portal" />
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <div style="align-items: center">
    <LoginButton/>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  .disp {
    display: inline-grid;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

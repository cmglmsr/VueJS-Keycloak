<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import store from '@/store.js'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Docs</template>

    View official TR7 documentation for configurations and support:
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Visit docs</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Licenses</template>

    View and manage the licenses for your organization, or purchase a new license:
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Go to licenses</a>

    <br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ticket</template>

    Submit a ticket for support:
    <button @click="handleNav" rel="noopener">Submit a ticket</button>
  </WelcomeItem>

</template>
<script>
import store from "@/store.js"
export default {
  methods: {
    handleNav() {
      const isLoggedIn = store.getters.getClient.authenticated;
      if(isLoggedIn) {
        alert("logged in!")
      } else {
        alert("KYS!")
      }
    }
  }
}
</script>
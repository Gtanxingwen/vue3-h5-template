<template>
  <header> header </header>
  <main>
    <PageLayout />
  </main>
  <footer>footer</footer>
</template>

<script lang="ts" setup>
  import PageLayout from './page.vue';
</script>

<style scoped lang="less">
  header {
    height: 100px;
    border-bottom: 1px solid #999;
  }

  main {
    flex: 1;
  }

  footer {
    height: 100px;
    border-top: 1px solid #999;
  }
</style>

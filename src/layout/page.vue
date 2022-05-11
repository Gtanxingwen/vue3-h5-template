<template>
  <router-view>
    <template #default="{ Component, currentRoute = route }">
      <transition name="fade" mode="out-in" appear>
        <component
          v-if="currentRoute.meta.ignoreCache"
          :is="Component"
          :key="currentRoute.fullPath"
        />
        <keep-alive v-else>
          <component :is="Component" :key="currentRoute.fullPath" />
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>

<style scoped lang="less"></style>

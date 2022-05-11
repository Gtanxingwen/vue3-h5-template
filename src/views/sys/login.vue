<template>
  <div>login page</div>
  <button @click="login">登录</button>
</template>

<script lang="ts">
  import { defineComponent, toRaw } from 'vue';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    setup() {
      const userStore = useUserStore();
      const login = async () => {
        await userStore.login(
          toRaw({
            phone: '18581893580',
          }),
        );
      };
      return {
        login,
      };
    },
  });
</script>

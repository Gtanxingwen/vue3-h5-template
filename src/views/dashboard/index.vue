<template>
  <div class="dashboard">
    <div>dashboard</div>
    <div> 使用Svg Icon 雪碧图 </div>
    <SvgIcon name="trash" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SvgIcon from '/@/components/SvgIcon.vue';

  export default defineComponent({
    name: 'Dashboard',
    components: {
      SvgIcon,
    },
    setup() {},
  });
</script>

<style lang="less">
  .dashboard {
    height: 200px;
  }
</style>

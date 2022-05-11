import type { RouteRecordRaw } from 'vue-router';
import LAYOUT from '/@/layout/default.vue';

const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  children: [
    {
      path: '',
      name: 'Index',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
};

export default dashboard;

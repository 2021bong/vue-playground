import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import UserPage from './pages/UserPage.vue';
import UserPageDetail from './components/UserPageDetail.vue';
import TodoList from './pages/TodoList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: UserPage,
  },
  {
    path: '/userpage/:userId',
    name: 'userpage-id',
    component: UserPageDetail,
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

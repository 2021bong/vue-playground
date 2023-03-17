import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import UserPageDetail from './components/UserPageDetail.vue';
import UserPage from './pages/UserPage.vue';
import TodoList from './pages/TodoList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: UserPage,
  },
  {
    path: '/userpage/:id',
    name: 'userpage-id',
    component: UserPageDetail,
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList,
  },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default Router;

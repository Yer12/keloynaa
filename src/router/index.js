import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import Playgrounds from "@/pages/Playgrounds";
import PlaygroundDetail from "@/pages/PlaygroundDetail";
import AddPlayground from "@/pages/AddPlayground";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import AdminPage from "@/pages/AdminPage";
import Booking from "@/pages/Booking";
import Success from "@/pages/Success";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/playgrounds',
    name: 'Playgrounds',
    component: Playgrounds
  },
  {
    path: '/playground/:id',
    name: 'PlaygroundDetail',
    component: PlaygroundDetail
  },
  {
    path: '/addPlayground',
    name: 'AddPlayground',
    component: AddPlayground
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage
  },


]
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    window.scrollTo(0,0)
  }
})

export default router

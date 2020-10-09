import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import GameEngine from "@/views/PortfolioPage/GameEngine";
import SpaceInvaders from "@/views/PortfolioPage/SpaceInvaders";
import DXScene from "@/views/PortfolioPage/DXScene";
import SimplePlatformer from "@/views/PortfolioPage/SimplePlatformer";
import AudioEngine from "@/views/PortfolioPage/AudioEngine";
import Multiplayer from "@/views/PortfolioPage/Multiplayer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portfolio/engine',
    name: 'Game Engine',
    component: GameEngine
  },
  {
    path: '/portfolio/space-invaders',
    name: 'Space Invaders',
    component: SpaceInvaders
  },
  {
    path: '/portfolio/dx-scene',
    name: 'DX Scene',
    component: DXScene
  },
  {
    path: '/portfolio/platformer',
    name: 'Simple Platformer',
    component: SimplePlatformer
  },
  {
    path: '/portfolio/audio-engine',
    name: 'Audio Engine',
    component: AudioEngine
  },
  {
    path: '/portfolio/multiplayer',
    name: 'Multiplayer',
    component: Multiplayer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

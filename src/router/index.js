import { createRouter, createWebHistory } from 'vue-router'
import VistaInicio from '@/views/VistaInicio.vue'
import VistaDetalle from '@/views/VistaDetalle.vue'
import VistaEspecies from '../views/VistaEspecies.vue'



const routes = [
  {
    path: '/',
    name: 'VistaInicio',
    component: VistaInicio
  },
  {
    path: '/florayfauna',
    name: 'VistaEspecies',
    component: VistaEspecies
  },
  {
    path: '/contacto',
    name: 'VistaContacto',
    component: ()=> import('../views/VistaContacto.vue')
    
  },
  {
    path: "/:pathMatch(.*)*", 
    name: "Error404",
    component: ()=> import('../views/Error404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

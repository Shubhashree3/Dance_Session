import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AdminCard: () => import('../../components/AdminCard.vue' /* webpackChunkName: "components/admin-card" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  SessionCard: () => import('../../components/SessionCard.vue' /* webpackChunkName: "components/session-card" */).then(c => wrapFunctional(c.default || c)),
  SessionCarousal: () => import('../../components/SessionCarousal.vue' /* webpackChunkName: "components/session-carousal" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

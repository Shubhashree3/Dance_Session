import { wrapFunctional } from './utils'

export { default as AdminCard } from '../../components/AdminCard.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SessionCard } from '../../components/SessionCard.vue'
export { default as SessionCarousal } from '../../components/SessionCarousal.vue'

export const LazyAdminCard = import('../../components/AdminCard.vue' /* webpackChunkName: "components/admin-card" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySessionCard = import('../../components/SessionCard.vue' /* webpackChunkName: "components/session-card" */).then(c => wrapFunctional(c.default || c))
export const LazySessionCarousal = import('../../components/SessionCarousal.vue' /* webpackChunkName: "components/session-carousal" */).then(c => wrapFunctional(c.default || c))

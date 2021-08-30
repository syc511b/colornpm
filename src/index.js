import innerblk from './components/innerblk.vue'
import outerblk from './components/outerblk.vue'


const Components = [
 innerblk, outerblk
]
const install = function (Vue) {
 Components.forEach(component => {
   Vue.component(component.name, component)
 })
}
export default {
 install
}
// import Skeleton from './skeleton.vue'
// import More from './more.vue'
// import Bread from './bread.vue'
// import BreadItem from './bread-item.vue'
// export default {
//   install (app) {
//     app.component(Skeleton.name, Skeleton)
//     app.component(More.name, More)
//     app.component(Bread.name, Bread)
//     app.component(BreadItem.name, BreadItem)
//   }
// }

// 批量注册组件
const importFn = require.context('./', false, /\.vue$/)
// console.dir(importFn.keys())
export default {
  install (app) {
    importFn.keys().forEach(key => {
      const components = importFn(key).default
      app.component(components.name, components)
    })
    defineDirective(app)
  }
}
const defineDirective = (app) => {
  // 图片懒加载指令 v-lazyload
  app.directive('lazyload', {
    // vue2.0 inserted函数，元素渲染后
    // vue3.0 mounted函数，元素渲染后
    mounted (el, binding) {
      // 元素插入后才能获取到dom元素，才能使用 intersectionobserve进行监听进入可视区
      // el 是图片元素  binding.value 图片地址
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          // 取消观察
          observe.unobserve(el)
        }
      }, {
        threshold: 0.01
      })
      // 进行观察
      observe.observe(el)
    }
  })
}

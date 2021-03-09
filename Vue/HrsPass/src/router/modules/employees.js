import Layout from '@/layout'

export default {
  path: '/employees',
  name: 'employess',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/employees'),
      meta: {
        title: '员工管理'
      }
    }
  ]
}

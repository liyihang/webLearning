import Layout from '@/layout'

export default {
  path: '/permission',
  name: 'permission',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/permission'),
      meta: {
        title: '权限管理'
      }
    }
  ]
}

import Layout from '@/layout'

export default {
  path: '/setting',
  name: 'setting',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/setting'),
      meta: {
        title: '设置'
      }
    }
  ]
}

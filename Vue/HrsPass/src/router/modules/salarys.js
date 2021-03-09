import Layout from '@/layout'

export default {
  path: '/salarys',
  name: 'salarys',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/salarys'),
      meta: {
        title: '工资'
      }
    }
  ]
}

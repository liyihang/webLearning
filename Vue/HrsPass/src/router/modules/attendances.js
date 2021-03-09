import Layout from '@/layout'

export default {
  path: '/attendances',
  name: 'attendances',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/attendances'),
      meta: {
        title: '考勤'
      }
    }
  ]
}

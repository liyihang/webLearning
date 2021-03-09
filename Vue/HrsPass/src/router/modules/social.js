import Layout from '@/layout'

export default {
  path: '/social',
  name: 'social',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/social'),
      meta: {
        title: '社保'
      }
    }
  ]
}

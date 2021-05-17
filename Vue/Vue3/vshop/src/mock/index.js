import Mock from 'mockjs'
import category from './category'

Mock.setup({
  timeout: '500-1000'
})
/**
 * @param url
 * @param http methods
 * @param call back func
 * @returns obj
 */
Mock.mock(/\/home\/category\/head/, 'get', category.headCategory)

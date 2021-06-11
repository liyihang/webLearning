import Mock from 'mockjs'
import category from './category'
import home from './home'

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
<<<<<<< HEAD
=======
// brands
>>>>>>> 484f6bee13b695e93138ba747307e4898b58c993
Mock.mock(/\/home\/brand/, 'get', home.brand)

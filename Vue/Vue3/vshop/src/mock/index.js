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

// brands

Mock.mock(/\/home\/brand/, 'get', home.brand)

// banner
Mock.mock(/\/home\/banner/, 'get', home.banner)
// new
Mock.mock(/\/home\/new/, 'get', home.new)
// hot
Mock.mock(/\/home\/hot/, 'get', home.hot)
// goods
Mock.mock(/\/home\/goods/, 'get', home.goods)

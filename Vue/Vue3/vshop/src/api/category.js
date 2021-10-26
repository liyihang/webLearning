import request from '@/utils/request'
/**
 * 获取首页头部分类数据
 */
export const findHeadCategory = () => {
  return request('/home/category/head', 'get')
}
// 获取某个单独的顶级分类
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
// 获取所有分类筛选条件
export const findSubCategoryFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}
// 获取分类商品数据
export const findSubCategoryGoods = (params) => {
  return request('/category/goods/temporary', 'post', params)
}

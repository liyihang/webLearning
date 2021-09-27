// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export const findHeadCategory = () => {
  return request('/home/category/head', 'get')
}
/**
 * 获取品牌分类数据
 */
export const findBrand = limit => {
  return request('/home/brand', 'get', { limit })
}
export const findbaner = () => {
  return request('/home/baner', 'get')
}

// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export const findHeadCategory = () => {
  return request('/home/category/head', 'get')
}
/**
 * 获取头部品牌数据
 */
export const findBrands = limit => {
  return request('/home/brand', 'get', { limit })
}

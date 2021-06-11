// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export const findHeadCategory = () => {
  return request('/home/category/head', 'get')
}
/**
<<<<<<< HEAD
 * 获取品牌分类数据
 */
export const findBrand = limit => {
=======
 * 获取头部品牌数据
 */
export const findBrands = limit => {
>>>>>>> 484f6bee13b695e93138ba747307e4898b58c993
  return request('/home/brand', 'get', { limit })
}

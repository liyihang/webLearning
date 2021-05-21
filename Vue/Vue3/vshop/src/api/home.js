import request from '@/utils/request'

export const findHeadCategory = () => {
  return request('/home/category/head', 'get')
}

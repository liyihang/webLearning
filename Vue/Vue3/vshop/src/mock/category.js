// 用来生成分类相关模拟数据的
import { topCategory } from '@/api/constants'
import Mock from 'mockjs'

const images = [
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(1).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(2).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(3).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(4).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(5).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(6).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(7).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(8).png'
]

const getHeadCategory = () => {
  const topCategoryList = topCategory.map(item => {
    const children = []
    for (let i = 0; i < 10; i++) {
      children.push(
        Mock.mock({
          id: '@id',
          name: '@ctitle(2,4)',
          picture: images[Mock.mock('@integer(0,7)')]
        })
      )
    }
    // all data
    return Mock.mock({
      id: '@id',
      name: item,
      children
    })
  })
  return {
    msg: '请求数据成功',
    results: topCategoryList
  }
}
export default {
  headCategory: getHeadCategory
}

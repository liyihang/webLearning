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
    const goods = []
    for (let index = 0; index < 9; index++) {
      goods.push(
        Mock.mock({
          id: '@id',
          name: '@ctitle(15,20)',
          desc: '@ctitle(6,12)',
          price: '@float(10,200,2,2)', // 预备几张图，随机取出即可
          picture: images[Mock.mock('@integer(0,7)')]
        })
      )
    }
    // all data
    return Mock.mock({
      id: '@id',
      name: item,
      children,
      goods
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

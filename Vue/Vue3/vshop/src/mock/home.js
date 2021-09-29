import Mock from 'mockjs'
import qs from 'qs'
export default {
  brand: config => {
    const queryStr = config.url.split('?')[1]
    const queryObj = qs.parse(queryStr) || {}
    const limit = queryObj.limit || 10

    // 品牌列表
    const brands = []
    for (let i = 0; i < limit; i++) {
      brands.push(
        Mock.mock({
          id: '@id',
          // 注意：只有5张 1-5 的地址
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_${(i %
            5) +
            1}.jpg`,
          name: '@ctitle(6,8)',
          desc: '@ctitle(20,30)',
          place: '@city'
        })
      )
    }
    return {
      msg: '获取品牌成功',
      result: brands
    }
  },
  // banner 轮播图
  banner: config => {
    const list = []
    for (var i = 0; i < 5; i++) {
      list.push(Mock.mock({
        id: '@id',
        imgUrl: `http://zhoushugang.gitee.io/erabbit-client-pc-static/images/b${i + 1}.jpg`,
        hrefUrl: '#'
      }))
    }
    return {
      msg: '获取轮播成功',
      result: list
    }
  },
  // 新鲜好物
  new: config => {
    const list = []
    for (var i = 0; i < 4; i++) {
      list.push(Mock.mock({
        id: '@id',
        picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/new_goods_${i + 1}.jpg`,
        name: '@ctitle(6,8)',
        price: '@float(100,10000,2,2)'
      }))
    }
    return {
      msg: '查询好物成功',
      result: list
    }
  },
  hot: config => {
    const list = []
    for (var i = 0; i < 4; i++) {
      list.push(Mock.mock({
        id: '@id',
        picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/popular_${i + 1}.jpg`,
        title: '@ctitle(5-10)',
        alt: '@ctitle(5-9)'
      }))
    }
    return {
      msg: '热销商品获取成功',
      result: list
    }
  }
}

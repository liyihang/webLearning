import Mock from 'mockjs'
import qs from 'qs'
export default {
  brand: config => {
    const queryStr = config.url.split('?')[1]
    const queryObj = qs.parse(queryStr) || {}
    const limit = queryObj.limit || 10
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
  }
}

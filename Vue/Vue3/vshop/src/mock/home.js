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
          pictures: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_${(i %
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

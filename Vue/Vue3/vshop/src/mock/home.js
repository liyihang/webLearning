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
      list.push(
        Mock.mock({
          id: '@id',
          imgUrl: `http://zhoushugang.gitee.io/erabbit-client-pc-static/images/b${i +
            1}.jpg`,
          hrefUrl: '#'
        })
      )
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
      list.push(
        Mock.mock({
          id: '@id',
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/new_goods_${i +
            1}.jpg`,
          name: '@ctitle(6,8)',
          price: '@float(100,10000,2,2)'
        })
      )
    }
    return {
      msg: '查询好物成功',
      result: list
    }
  },
  hot: config => {
    const list = []
    for (var i = 0; i < 4; i++) {
      list.push(
        Mock.mock({
          id: '@id',
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/popular_${i +
            1}.jpg`,
          title: '@ctitle(5-10)',
          alt: '@ctitle(5-9)'
        })
      )
    }
    return {
      msg: '热销商品获取成功',
      result: list
    }
  },
  goods: config => {
    const list = []
    const images = [
      'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_cover.jpg',
      'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_cover.jpg',
      'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/kitchen_goods_cover.jpg',
      'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/home_goods_cover.jpg'
    ]
    for (let i = 0; i < 4; i++) {
      const children = []
      for (let j = 0; j < 3; j++) {
        children.push(
          Mock.mock({
            id: '@id',
            name: '@ctitle(2,4)'
          })
        )
      }
      const goods = []
      for (let k = 0; k < 8; k++) {
        goods.push(
          Mock.mock({
            id: '@id',
            name: '@ctitle(12,24)',
            price: '@float(100,1000,2,2)',
            picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_${k +
              1}.jpg`
          })
        )
      }
      list.push(
        Mock.mock({
          id: '@id',
          picture: images[i],
          name: '@ctitle(2,3)',
          saleInfo: '@ctitle(4,4)',
          children,
          goods
        })
      )
    }
    console.log('加载商品列表数据')
    return {
      msg: '查询商品列表成功',
      result: list
    }
  },
  // 专题列表
  special: config => {
    const list = []
    for (let i = 0; i < 3; i++) {
      list.push(Mock.mock({
        id: '@id',
        cover: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/topic_goods_${i + 1}.jpg`,
        title: '@ctitle(8,12)',
        summary: '@ctitle(6,8)',
        lowestPrice: '@float(100,1000,2,2)',
        detailsUrl: '/#/',
        collectNum: '100',
        viewNum: '120',
        replyNum: '60'
      }))
    }
    return {
      msg: '查询专题列表成功',
      result: list
    }
  }
}

import Mock from 'mockjs'
import qs from 'qs'
export default {
  brand: config => {
    const queryStr = config.url.split('?')[1]
    const queryObj = qs.parse(queryStr) || {}
    const limit = queryObj.limit || 10
    
  }
}

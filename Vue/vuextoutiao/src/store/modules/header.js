import axios from 'axios'
export default {
  namespace: true,
  state: {},
  mutations: {},
  actions: {
    async GetCategory (context) {
      const {
        data: {
          data: { channels }
        }
      } = await axios.get('http://ttapi.research.itcast.cn/app/v1_0/channels')
      context.commit('updateCatagtory', channels)
      context.commit('updateCurrentCatagtory', channels[0].id)
    }
  }
}

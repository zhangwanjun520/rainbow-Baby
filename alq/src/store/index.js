import Vue from 'vue'
import Vuex from  'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    buycar:[

        ],

  },
  mutations:{
    add(state,payload){
      console.log(payload)
      state.buycar.push( payload );

    },
    jia(state, payload){
      console.log(payload)
      // payload 接收的是 context.commit('jia', index) 这段代码中的 index
      console.log(this.state.buycar[payload])
      state.buycar[payload].num++;
      console.log( state.buycar[payload].num++)
  },
  // jian(state, payload){
  //     state.buycar[payload].num--;
  //     if( state.buycar[payload].num===0 ){
  //         state.buycar.splice(payload, 1);
  //     }
  // }

    // 获取数据

  },

  actions:{
    add(context, payload){
      console.log(payload)
      // vuex 的工作流程
      // 1 组件 调用 actions
      //      this.$store.dispatch('addToCart', item)
      // 2 actions 调用 mutations
      //      context.commit('addToCart', payload)
      // 3 mutations 修改 state
      // 4 组件 根据 state 进行重新渲染

      // vuex 建议我们：异步代码 和 业务逻辑代码 都写在 actions 中，这样的做好处是代码分层了，逻辑清晰了，将来可以更好的维护代码
      // 相同的商品，数量加1

      // 1 判断用户所选的商品，是否已经在购物车中存在
      // 使用 context.state 可以获取 store 的 state 对象
      // findIndex 中的函数，如果有一个返回true，findIndex则返回该函数对应的成员的下标
console.log(context.state.buycar.findIndex(index))
      var index = context.state.buycar.findIndex(item=>item.payload._id==payload._id)

      console.log(index)
      // 根据下标判断购物车中是否存在该商品
      if( index === -1 ){
          // 不存在该商品
          context.commit('add', {payload, num:1})
      }else{
          // 存在该商品
          console.log('存在',index)
          context.commit('jia', index)
      }
  },
//   jian( context, payload ){
//     var index = context.state.buycar.findIndex(item=>item.payload._id===payload._id)
//     context.commit('jian', index)
// }
  },
  plugins:[createPersistedState()]

})






export default store

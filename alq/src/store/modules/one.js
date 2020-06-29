// import {post} from '../../lib/api';
// import { stat } from 'fs';

const state = {
    info:'hello world',
    arr:[
      '王一博',
      '杨洋',
      '周杰伦',
      '杨幂',
      'angelababy',
      '莱昂纳多'
    ]


};

const getters = {

};
const mutations = {
  newVal(state,payload){
    state.info=payload
    // console.log(state.info)
  },
  add(state,payload){
    state.arr.push(payload)
  },
  del(state,payload){
    state.arr.splice(payload,1)
  }
};
const actions = {
    changeVal(context, payload){
    context.commit('newVal',payload);
    },
    addVal(context,payload){
      context.commit('add',payload)
    },
    delVal(context,payload){
      context.commit('del',payload)
    }

};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

import axios from 'axios'
export const state = {
    articles:[],
    newarticle:{
      title:'',
      content:''
    }

}

export const mutations = {
    GET_DATA (state){
      var self = this
      axios.get('http://localhost:3000/api/article', {})
      .then(function (response) {
        state.articles = response.data
        console.log(state.articles);
      })
      .catch(function (error) {
        console.log(error)
      })
    }
}

export const actions = {
   getData :function ({commit}){
     commit('GET_DATA')
   }
}

export const getters = {
    getarticles: state => state.articles,
}

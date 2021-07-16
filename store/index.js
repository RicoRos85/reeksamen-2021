// Here you find integrations to access our 
// Server Side Session data for Nuxt.js routing 
// across all of our pages, and to figure out if
// an User is autenticated.


export const state = () => ({
    user: null
  })
  
  export const mutations = {
    SET_USER(state, user) {
      state.user = user
    }
  }
  
  export const actions = {
    nuxtServerInit({ commit }, { req }) {
      if (req.session && req.session.user) {
        commit('SET_USER', req.session.user)
      }
    }
  }
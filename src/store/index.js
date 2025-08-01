import { createStore } from 'vuex'

const auth = {
  namespaced: true,
  state: () => ({ user: null }),
  mutations: {
    login(state, username) {
      state.user = username
    }
  }
}

const items = {
  namespaced: true,
  state: () => ({ list: [] }),
  mutations: {
    addItem(state, item) {
      state.list.push(item)
    },
    editItem(state, { index, updated }) {
      state.list[index] = updated
    },
    deleteItem(state, index) {
      state.list.splice(index, 1)
    }
  }
}

export default createStore({
  modules: {
    auth,
    items
  }
})

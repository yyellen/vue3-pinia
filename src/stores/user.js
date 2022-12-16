import { defineStore } from 'pinia'

// 1. Store 名稱
// 2. 屬性參數
export default defineStore('User Store', {
  // data
  state: () => {
    return {
      name: '卡斯伯',
      wallet: 300
    }
  },

  // computed
  getters: {
    getUserName: (state) => `我的名字叫做 ${state.name}`
  },

  // methods
  actions: {
    // 可以使用 this
    updateName() {
      this.name = '杰倫'
    }
  }
})

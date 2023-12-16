import { createStore } from "vuex";

export default createStore({
  state: {
    storageType: 'nostorage',
    items: [
      {
        title: 'Default 1',
        id: '1',
        completed: false
      },
      {
        title: 'Default 2',
        id: '2',
        completed: true
      },
      {
        title: 'Default 3',
        id: '3',
        completed: false
      },
    ],
  },
  mutations: {
    addToDoItem(state, newToDoItem) {
      state.items = [...this.state.items, newToDoItem]
      this.commit('storeItemsInStorage')
    },
    markCompleteToDoItem(state, toDoId){
      const index = state.items.findIndex(function(el) {
        return el.id === toDoId;
      })
      state.items[index].completed = !state.items[index].completed
      this.commit('storeItemsInStorage')
    },
    deleteToDoItem(state, toDoId){
      state.items = state.items.filter(item => item.id !== toDoId)
      this.commit('storeItemsInStorage')
    },
    initializeItemsLocal(state){
      // define items from localStorage
      if(localStorage.getItem('items')){
        state.items = JSON.parse(localStorage.getItem('items'))
      }
    },
    initializeItemsSession(state){
      // define items from sessionStorage
      if(sessionStorage.getItem('items')){
        state.items = JSON.parse(sessionStorage.getItem('items'))
      }
    },
    initializeStorageType(state){
      // define items from sessionStorage
      if(localStorage.getItem('storageType')){
        state.storageType = JSON.parse(localStorage.getItem('storageType'))
      }
    },
    changeStorageType(state, storageType){
      state.storageType = storageType
      localStorage.setItem('storageType', JSON.stringify(state.storageType))
      this.commit('storeItemsInStorage')
    },
    storeItemsInStorage(state){
      if(state.storageType == 'sessionstorage'){
        sessionStorage.setItem('items', JSON.stringify(state.items))
        localStorage.removeItem('items')
      } else if(state.storageType == 'localstorage'){
        localStorage.setItem('items', JSON.stringify(state.items))
        sessionStorage.removeItem('items')
      } else {
        localStorage.removeItem('items')
        sessionStorage.removeItem('items')
      }
    }
  },
  actions: {
    addToDoItem(state, newToDoItem){
      this.commit('addToDoItem', newToDoItem)
    },
    markCompleteToDoItem(state, toDoId){
      this.commit('markCompleteToDoItem', toDoId)
    },
    deleteToDoItem(state, toDoId){
      this.commit('deleteToDoItem', toDoId)
    },
    initializeItemsLocal(state){
      this.commit('initializeItemsLocal')
    },
    initializeItemsSession(state){
      this.commit('initializeItemsSession')
    },
    initializeStorageType(state){
      this.commit('initializeStorageType')
    },
    changeStorageType(state, storageType){
      this.commit('changeStorageType', storageType)
    }
  }
})

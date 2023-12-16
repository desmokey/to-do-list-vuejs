<template>
  <div id="app">
    <h1>To do list excercise</h1>
    <StorageTypeSelector/>
    <ToDoList />
  </div>
</template>

<script>
  import ToDoList from './components/ToDoList.vue'
  import StorageTypeSelector from './components/StorageTypeSelector.vue'

  export default {
    name: 'App',
    components: {
      ToDoList,
      StorageTypeSelector
    }
  }
</script>

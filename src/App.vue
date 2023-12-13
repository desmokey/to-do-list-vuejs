<template>
  <div id="app">
    <h1>To do list excercise</h1>
    <ToDoList />
  </div>
</template>

<script>
  import ToDoList from './components/ToDoList.vue'

  export default {
    name: 'App',
    components: {
      ToDoList,
    }
  }
</script>

<template>
  <div class="to-do-list">
    <ul>
      <li v-bind:key="item.id" v-for="item in items">
        <ToDoItem
          v-bind:id="item.id"
          v-bind:title="item.title"
          @delete-todo-event="deleteToDoItem"
        />
      </li>
    </ul>
    <AddToDoItemButton @add-todo-event="addToDoItem"/>
  </div>
</template>

<script>
  import ToDoItem from "./ToDoItem.vue";
  import AddToDoItemButton from './AddToDoItemButton.vue'

  export default {
    name: 'ToDoList',
    components: {
      ToDoItem,
      AddToDoItemButton
    },
    data() {
      return {
        items: [
          {
            id: 1,
            title: "Test 1",
            completed: true
          },
          {
            id: 2,
            title: "Test 2",
            completed: false
          },
          {
            id: 3,
            title: "Test 3",
            completed: false
          },
        ],
      }
    },
    methods: {
      addToDoItem(newToDoItem) {
        this.items = [...this.items, newToDoItem];
      },
      deleteToDoItem(toDoId){
        this.items = this.items.filter(item => item.id !== toDoId)
      }
    }
  }
</script>

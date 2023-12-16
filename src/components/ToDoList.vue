<template>
  <div class="to-do-list">
    <ul>
      <li v-bind:key="item.id" v-for="item in items">
        <ToDoItem
          :id="item.id"
          :title="item.title"
          :completed="item.completed"
          @delete-todo-event="$store.dispatch('deleteToDoItem', item.id)"
        />
      </li>
    </ul>
    <AddToDoItemButton @add-todo-event="$store.dispatch('addToDoItem', $event)"/>
  </div>
</template>

<script>
  import ToDoItem from "./ToDoItem.vue"
  import AddToDoItemButton from './AddToDoItemButton.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'ToDoList',
    components: {
      ToDoItem,
      AddToDoItemButton
    },
    beforeMount() {
      if(this.$store.state.storageType == 'sessionstorage'){
        this.$store.dispatch('initializeItemsSession')
      } else if(this.$store.state.storageType == 'localstorage'){
        this.$store.dispatch('initializeItemsLocal')
      }
    },
    computed: mapState({
      items: 'items'
    })
  }
</script>

<style lang="scss">
  .to-do-list {
    ul {
      margin: unset;
      padding: unset;
    }

    li {
      list-style-type: none;
    }
  }
</style>

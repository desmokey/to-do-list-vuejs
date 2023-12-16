<template>
  <div class="add-to-do-item-button">
    <form @submit="addToDo">
      <input type="text" v-model="title" name="title">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>

  import { v4 as uuidv4 } from 'uuid';

  export default {
    name: 'AddToDoButton',
    data() {
      return {
        title: ""
      }
    },
    methods: {
      addToDo(event){
        event.preventDefault();

        const newToDoObject = {
          id: uuidv4(),
          title: this.title,
          completed: false
        }

        this.$emit("add-todo-event", newToDoObject);
        this.title= '';
      }
    }
  }
</script>

<style lang="scss">
  .add-to-do-item-button {
    & > form {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }

    button {
      font-size: .75rem;

      &:hover {
        border-color: green;
      }
    }
  }
</style>

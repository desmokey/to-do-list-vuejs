<template>
  <div
    class="to-do-item"
    :class="{
      '--completed': completed
    }">
      <div>
        <input class="to-do-item__checkbox" type="checkbox" :checked="completed" />
        <label class="to-do-item__label" @click="$store.dispatch('markCompleteToDoItem', id)"> {{ title }} </label>
      </div>
      <button @click="$emit('delete-todo-event', id)"> Remove </button>
  </div>
</template>

<script>
  export default {
    name: 'ToDoItem',
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .to-do-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    cursor: pointer;

    &.--completed {
      color: green;
    }

    &__checkbox {
      vertical-align: middle;
    }

    &__label {
      margin-left: 10px;
    }

    button {
      font-size: .75rem;

      &:hover {
        border-color: red;
      }
    }
  }
</style>

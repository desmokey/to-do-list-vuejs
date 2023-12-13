<template>
  <div class="to-do-item" v-bind:class="{
      '--completed': completed
    }">
      <span @click="markComplete"> {{ title }} </span>
      <button @click="$emit('delete-todo-event', id)"> x </button>
  </div>
</template>

<script>
  export default {
    name: 'ToDoItem',
    data () {
      return {
        completed: false
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
    },
    methods: {
      markComplete(){
        this.completed = !this.completed
      }
    }
  }
</script>

<style lang="scss">
  .to-do-item {
    font-size: 2rem;
    cursor: pointer;

    &.--completed {
      color: green;
    }
  }
</style>

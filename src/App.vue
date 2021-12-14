<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo app</h1>
    <input type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo" v-model="todoText">
    <hr>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>

import Todo from '@/components/Todo.vue'
export default {
  components : {
    Todo
  },
  data(){
    return{
      todos : [
        { id : 1, text: 'buy a car', checked : false},
        { id : 2, text: 'play game', checked : false}
      ],
      todoText : ''
    }
  },
  methods : {
    addTodo(e){
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked : false
      })
      this.todoText = '';
    }
  }

}
</script>

<style>

</style>

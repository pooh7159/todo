<template>
  <input type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo" v-model="todoText">
</template>

<script>
export default {
    methods : {
        addTodo(e){
            this.$emit('add-todo', e.target.value);
        }
    },
    data(){
        return{
            todoText : ''
        }
    }
}
</script>

<style>

</style>
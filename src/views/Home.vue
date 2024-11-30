    <script setup>
    import { ref } from 'vue';
    const todos = ref([])
    const newTodo = ref("")
    const CreateTodo = () => {
        todos.value.push({
            id: todos.value.length + 1,
            title: newTodo.value,
            completed: false
        })
        newTodo.value = ""
    }
    </script>
<template>
  <h1>Create Todos</h1>
  <div class="input-wrapper">
      <div class="input-container">
        <input type="text" placeholder="Enter your task" v-model="newTodo" />
        <button @click="CreateTodo" >Create</button>
      </div>
    </div>
    <p>Todos:</p>
    <ul>
        <li v-for="todo in todos" :key="todo.id" class="todo-item">
            {{todo.title}}
            </li>
            </ul>
</template>


<style lang="css" scoped>
h1{
    text-align: center;
    }
    .input-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input-container{
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    input{
        padding: 10px;
        border-radius: 5px;
        width: 300px;
        border: none;
        outline: none;
    }
    button{
        padding: 10px;
        border-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border: none;
        outline: none;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
    }
    button:hover{
        background-color: #0069d9;
    }
    .todo-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .todo-item:last-child{
        border-bottom: none;
    }
</style>
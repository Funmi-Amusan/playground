    <script setup>
    import TodoItem from '@/components/TodoItem.vue';
import { ref, watch, computed } from 'vue';
    const todos = ref([])
    const setTodoListToLocalStorage = () => {
        localStorage.setItem("todolist", JSON.stringify(todos.value))
    }
    watch(todos, () => {
        setTodoListToLocalStorage()
    }, {
        deep: true
    })
    const todoCompleted = computed(() => {
        return todos.value.every((todo) => todo.completed)
    })
const fetchTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todolist'))
    if (savedTodos) {
        todos.value = savedTodos
    };
};

fetchTodos();
   
    const newTodo = ref("")
    const isInvalid = ref(false)
    const CreateTodo = () => {
        isInvalid.value = false
        if(newTodo.value.trim() === "") {
            isInvalid.value = true
            return
        }
        todos.value.push({
            id: todos.value.length + 1,
            title: newTodo.value,
            completed: false
        })
        newTodo.value = ""
    }

    const toggleTodoComplete = (index) => {
        todos.value[index].completed = !todos.value[index].completed
    }
    const deleteTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }
    </script>
<template>
  <h1>Create Todos</h1>
  <div class="input-wrapper">
      <div class="input-container" :class="{'invalidInput': isInvalid}">
        <input type="text" placeholder="Enter your task" v-model="newTodo" autofocus/>
        <button @click="CreateTodo" >Create</button>
      </div>
    </div>
    <p v-show="isInvalid" class="errMsg" >Todo cannot be empty</p>
    <div v-if="todos.length > 0" >
        <p>Todos:</p>
        <ul>
                <TodoItem v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index" @toggle-completed="toggleTodoComplete" @delete-todo="deleteTodo" />
                </ul>
    </div>
    <div v-else style="display: flex; justify-content: center;">
        <p>No todos yet</p>
    </div>
    <div v-if="todoCompleted && todos.length > 0" style="display: flex; justify-content: center;">
        <p>All Todos Completed</p>
    </div>
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
    .errMsg{
        color: red;
        font-size: 12px;
        margin-top: 5px;
    }
    .invalidInput{
        border: 1px solid red;
    }
</style>
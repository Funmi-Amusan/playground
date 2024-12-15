    <script setup>
    import axiosClient from '@/axiosClient';
import TodoItem from '@/components/TodoItem.vue';
import store from '@/store';
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
const meals = computed(() => store.state.meals)
const letters = "ABCDEFGHIJKLMNOPQRSTVXYZ".split('')

fetchTodos();
   
    const newTodo = ref("")
    const searchString = ref("")
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

    const mealData = async () => {
        const result = await axiosClient.get('/search.php?f=a')
        console.log("result", result.data.meals)
    }
    const searchMeals = async () => {
        store.dispatch('searchMeals', searchString.value)
    }
    const searchedMeals = computed(() => store.state.searchedMeals.meals)
    mealData()


    </script>
<template>
  <h1 class=" bg-green-500" >Create Todos</h1>
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

    <div>
        <p>{{searchedMeals}}</p>
        <div class="input-wrapper">
      <div class="input-container" :class="{'invalidInput': isInvalid}">
        <input type="text" placeholder="Search meals" v-model="newTodo" autofocus/>
        <button @click="CreateTodo" >Search</button>
      </div>
      <router-link 
  :to="{ name: 'byletter', params: { letter } }" 
  :key="letter" 
  v-for="letter of letters" 
  class="letter"
>
  {{ letter }}
</router-link>
    </div>
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
    .letter{
        padding: 4px;
        margin: 2px;
        border-radius: 5px;
        background-color: #f2f2f2;
        text-decoration: none;
    }
</style>
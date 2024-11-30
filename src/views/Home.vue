    <script setup>
    </script>
<template>
  <h1>Create Todos</h1>
  <div class="input-wrapper">
      <div class="input-container">
        <input type="text" placeholder="Enter your task">
        <button>Create</button>
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
</style>
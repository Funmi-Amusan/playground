<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>  
<header>
    <nav>
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <h1>Todos</h1>
        </div>
        <ul>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </ul>
    </nav>
</header>
</template>


<style scoped>
header{
    background-color: gainsboro;
    padding: 20px;
}
.logo {
    display: flex;
    align-items: center;
}
h1{
    font-size: 20px;
    margin-left: 10px;
}
img{
    width: 50px;
    height: 50px;
}
nav{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
div {
    flex-direction: row;
    display: flex;
}
ul{
    display: flex;
    flex-direction: row;
    list-style: none;
}
a{
    text-decoration: none;
    color: black;
    margin-left: 20px;
}
a:hover{
    color: rgb(104, 104, 104);
}
</style>
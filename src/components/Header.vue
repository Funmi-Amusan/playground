            <script setup>
            import { RouterLink } from 'vue-router';
            
            </script>

<template>  
<header>
    <nav>
        <div>
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
nav{
    display: flex;
    flex-direction: row;
    background-color: blanchedalmond;
    justify-content: space-between;
}
div {
    flex-direction: row;
    display: flex;
}
</style>
<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
})
</script>

<template>  
<div>
    <li class="todo-item">
        <input type="checkbox" :checked="todo.completed" />
        <span>{{todo.title}}</span>
        <div>
            <Icon icon="mdi-light:home" />
        </div>
    </li>
</div>
</template>

<style lang="css" scoped>
.todo-item{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}
</style>
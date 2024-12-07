<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({
    todo: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})
defineEmits(['toggle-completed', 'delete-todo'])
</script>

<template>  
<div>
    <li class="todo-item">
        <span :class="{'completed': todo.completed}"  >{{todo.title}}</span>
        <input type="checkbox" :checked="todo.completed" @input="$emit('toggle-completed', index)" />
        <!-- <div>
            <Icon icon="typcn:delete" width="24" height="24"  style="color: red" @click="$emit('delete-todo', todo.id)" />
        </div> -->
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
.completed{
    text-decoration: line-through;
}
</style>
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
        <div>
            <input class="checkbox" type="checkbox" :checked="todo.completed" @input="$emit('toggle-completed', index)" />
            <span :class="{'completed': todo.completed}"  >{{todo.title}}</span>
        </div>
        <div class="action">
            <div class="action grey-bg">

                <Icon icon="tabler:clock-hour-4" width="24" height="24"  style="color: grey" />
                <p>08:00 - 09:00</p>
            </div>
            <div class="grey-bg">

                <Icon icon="majesticons:more-menu-vertical" width="24" height="24"  style="color: grey" />
            </div>
        </div>
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
    justify-content: space-between;
}
.completed{
    text-decoration: line-through;
}
.checkbox{
 width: 20px;
 height: 20px;
 border-radius: 50%;
}
.action{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.grey-bg{
    background-color : gainsboro ;
    border-radius: 5px;
    height: 30px;
    padding-inline: 3px;
}
</style>
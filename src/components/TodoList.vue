<script setup>
import TodoItem from './TodoItem.vue';

defineProps({
    list: Array
})

const emit = defineEmits(['remove', 'complete-task'])

</script>

<template>
    <div class="todo-list">
        <ul>
            <li v-for="(task, index) in list" :key="index">
                <todo-item :task="task" @remove="emit('remove', index)"
                    @complete="emit('complete-task', { ...task, completed: true }, index)" />
            </li>
            <li v-if="list.length === 0">Nenhuma tarefa encontrada.</li>
        </ul>
    </div>
</template>

<style scoped>
.todo-list {
    padding: 20px;
}
</style>
<script setup>
const props = defineProps({
    task: Object
})

console.log('Recebido na TodoItem:', props.task)
</script>


<template>
    <div class="todo-item">
        <div>
            <div>
                <h4 style="margin: 0px;">{{ task.name }}</h4>
                <p style="margin-top: 8px;">{{ task.description }}</p>
            </div>
            <p>{{ task.dueDate }}</p>
        </div>
        <div class="todo-item-actions" v-if="!task.completed">
            <button @click="$emit('remove')">Remover</button>
            <button @click="$emit('complete')">Concluida</button>
        </div>
    </div>
</template>

<style scoped>
.todo-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.todo-item-actions button {
    margin-left: 5px;
}
</style>
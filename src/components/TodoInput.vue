<script setup>
import { ref } from 'vue'

const taskName = ref('')
const taskDescription = ref('')
const taskDueDate = ref('')
const emit = defineEmits(['add'])

const addTask = () => {
    if (taskName.value.trim()) {
        emit('add', {
            name: taskName.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value
        })
        taskName.value = ''
        taskDescription.value = ''
        taskDueDate.value = ''
    }
}
</script>

<template>
    <div class="todo-card">

        <div class="todo-input">
            <p>Nome</p>
            <input id="task-name" type="text" v-model="taskName" placeholder="Adicione uma nova tarefa" />
        </div>
        <div class="todo-input">
            <p>Descrição</p>
            <input id="task-description" type="text" v-model="taskDescription"
                placeholder="Adicione a descrição da tarefa" />
        </div>
        <div class="todo-input">
            <p>Data</p>
            <input id="task-due-date" type="datetime-local" v-model="taskDueDate" />
        </div>
        <button @click="addTask" class="todo-button">Adicionar</button>
    </div>
</template>

<style scoped>
.todo-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: start;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.todo-input {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.todo-button {
    margin: 16px 0px;
}
</style>
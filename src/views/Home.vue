<script setup>
import { computed, ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue'

const listTasks = ref([])

const completedTasks = ref([])

const addTask = (task) => {
  listTasks.value.push({ ...task, completed: false })
}

const removeTask = (index) => {
  listTasks.value.splice(index, 1)
}

const completeTask = (task, index) => {
  completedTasks.value.push(task)
  listTasks.value.splice(index, 1)
}

const pendingCount = computed(() => {
  return listTasks.value.filter(task => !task.completed).length
})


</script>

<template class="home">
  <h1>To-Do List</h1>

  <div>
    <TodoInput @add="(name) => addTask(name)" />
  </div>

  <div>
    <div class="tasklist-header">
      <h2>Lista de Tarefas</h2>
      <p v-if="pendingCount > 0">Tarefas pendentes: {{ pendingCount }}</p>
    </div>
    <TodoList :list="listTasks" @remove="(index) => removeTask(index)"
      @complete-task="(task, index) => completeTask(task, index)" />
  </div>

  <div>
    <h2>Tarefas concluídas</h2>
    <TodoList :list="completedTasks" @remove="(index) => removeTask(index)" />
  </div>

</template>

<style scoped>
.home {
  padding: 20px;
}

.tasklist-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
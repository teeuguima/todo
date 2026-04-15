<script setup>
import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue'
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore()


</script>

<template class="home">
  <h1>To-Do List</h1>

  <div>
    <TodoInput @add="(name) => todoStore.addTask(name)" />
  </div>

  <div>
    <div class="tasklist-header">
      <h2>Lista de Tarefas</h2>
      <p v-if="todoStore.pendingCountTasks > 0">Tarefas pendentes: {{ todoStore.pendingCountTasks }}</p>
    </div>
    <TodoList :list="todoStore.tasks" @remove="(index) => todoStore.removeTask(index)"
      @complete-task="(index) => todoStore.completeTask(index)" />
  </div>

  <div>
    <h2>Tarefas concluídas</h2>
    <TodoList :list="todoStore.completedTasks" @remove="(index) => todoStore.removeTask(index)" />
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
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const tasks = ref([])

    const completedTasks = computed(() => tasks.value.filter((task) => task.completed))

    const pendingCountTasks = computed(() => tasks.value.filter((task) => !task.completed).length)

    function addTask(task) {
      tasks.value.push({ ...task, completed: false })
    }

    function removeTask(index) {
      tasks.value.splice(index, 1)
    }

    function completeTask(index) {
      tasks.value[index].completed = true
    }

    return { tasks, completedTasks, pendingCountTasks, addTask, removeTask, completeTask }
  },
  { persist: true },
)

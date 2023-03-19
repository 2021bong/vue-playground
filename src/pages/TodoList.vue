<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '../types/TodoList';

export default defineComponent({
  name: 'todolist',
  data(): TodoList {
    return {
      input: '',
      todos: [],
      todoNum: 1,
    };
  },
  methods: {
    writeTodo(e: Event) {
      const target = <HTMLInputElement>e.target;
      this.input = target.value;
    },
    addTodos() {
      if (!this.input) return;
      const newTodo = {
        id: this.todoNum,
        content: this.input,
        edit: false,
      };
      this.todos.push(newTodo);
      this.todoNum += 1;
      this.input = '';
    },
    editTodo(id: number) {
      this.todos = [...this.todos].map((todo) =>
        todo.id === id ? { ...todo, edit: true } : { ...todo, edit: false }
      );
    },
    endEdit(id: number) {
      this.todos = [...this.todos].map((todo) =>
        todo.id === id ? { ...todo, edit: false } : todo
      );
    },
    deleteTodo(id: number) {
      this.todos = [...this.todos].filter((todo) => todo.id !== id);
    },
  },
});
</script>

<template>
  <h2>TodoList</h2>
  <form class="todo-input-box" @submit.prevent>
    <input
      type="text"
      :value="input"
      className="todo-input"
      @input="writeTodo"
      @keypress.enter="addTodos"
    />
    <button value="write" @click="addTodos">write</button>
  </form>
  <ul>
    <li v-for="todo in todos" key="todo.id">
      <span className="todo-id">{{ todo.id }}</span>
      <input
        v-show="todo.edit"
        className="todo-content"
        v-model="todo.content"
      />
      <span v-show="!todo.edit" className="todo-content">{{
        todo.content
      }}</span>
      <button
        className="mr"
        @click="todo.edit ? endEdit(todo.id) : editTodo(todo.id)"
      >
        {{ todo.edit ? 'Done' : 'Modify' }}
      </button>
      <button @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
</template>

<style lang="scss">
h2 {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 2rem;
}

button {
  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 3px;
  &:active {
    background-color: #bbb;
  }
}

li {
  margin-bottom: 8px;
}

input {
  outline: none;
}

.todo-input-box {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 5px;

  .todo-input {
    margin-right: 5px;
    padding: 3px;
    border: none;
    border-bottom: 1px solid #bbb;
  }
}

.todo-id {
  margin-right: 10px;
  font-weight: 700;
}

.todo-content {
  margin-right: 10px;
}

.mr {
  margin-right: 2px;
}
</style>

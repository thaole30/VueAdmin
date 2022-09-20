<template>
  <li class="todo-item">
    <input
      style="display: none"
      type="checkbox"
      :id="`idinput-${todo.id}`"
      @input="toggleComplete(todo.id, $event)"
    />
    <label :for="`idinput-${todo.id}`">
      <v-row align="center" justify="start" class="todo-info">
        <v-checkbox :input-value="todo.isComplete"></v-checkbox>
        <span v-if="!isEditting"> {{ todo.title }}</span>
      </v-row>
    </label>
    <v-row align="center" justify="end" class="actions-group">
      <v-btn text icon>
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn text icon @click="toggleIsEditting(todo.id, $event)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn text icon @click="deleteTodo(todo.id, $event)">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-row>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "deleteTodo"],
};
</script>

<style lang="scss" scoped>
li.todo-item {
  position: relative;
  margin-top: 10px;
  background-color: rgb(245, 242, 242);
  cursor: pointer;
  label {
    .todo-info {
      margin: 0 !important;
      .text {
        margin: 0;
      }
    }
  }
  .actions-group {
    position: absolute;

    top: 28px;
    right: 16px;
  }

  &:hover {
    background-color: rgb(235, 230, 230);
  }
}
</style>

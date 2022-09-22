<template>
  <li class="todo-item">
    <input
      style="display: none"
      type="checkbox"
      :id="`idinput-${todo.id}`"
      @change="toggleComplete(todo.id, $event)"
    />
    <div class="update-title" v-if="isEditting">
      <v-text-field
        v-model="message"
        @keyup.enter="editTodo(todo.id)"
      ></v-text-field>
      <v-row align="center" justify="end" class="actions-group">
        <v-btn text icon @click="editTodo(todo.id)">
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-row>
    </div>
    <label :for="`idinput-${todo.id}`" v-if="!isEditting">
      <v-row align="center" justify="start" class="todo-info">
        <v-checkbox :input-value="todo.isComplete"></v-checkbox>
        <span v-if="!isEditting"> {{ todo.title }}</span>
      </v-row>
    </label>
    <v-row
      v-if="!isEditting"
      align="center"
      justify="end"
      class="actions-group"
    >
      <v-btn text icon>
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn text icon @click="isEditting = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn text icon @click="deleteTodo(todo.id)">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-row>
  </li>
</template>

<script>
import { mutation_types } from "@/store/modules/todos/mutation_types";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      isEditting: false,
      message: this.todo.title,
    };
  },
  methods: {
    ...mapActions(["deleteTodo"]),
    ...mapMutations({
      toggleComplete: mutation_types.UPDATE_TODO,
    }),
    editTodo() {
      this.isEditting = false;
      if (this.message !== "" || !!this.message) {
        console.log(this.todo.id, this.message);
        this.$store.commit(mutation_types.EDIT_TODO, {
          id: this.todo.id,
          editedTitle: this.message,
        });
      }
    },
    // toggleComplete(id, e) {
    //   console.log("iddd", id, e);
    //   this.$store.commit(mutation_types.UPDATE_TODO, id);
    // },
  },
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

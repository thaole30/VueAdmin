<template>
  <div class="todos-home">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12" md="6"> <TodoList /> </v-col>
      <v-col cols="12" md="6"> <LiveChat /> </v-col>
    </v-row>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import LiveChat from "./LiveChat.vue";
export default {
  name: "TodosHome",
  components: { TodoList, LiveChat, LiveChat },
};
</script>

<style lang="scss">
.todos-home {
  margin-top: 2rem;
}
</style>

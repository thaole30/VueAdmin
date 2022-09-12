<template>
  <v-navigation-drawer v-model="drawer" absolute left temporary>
    <v-list nav dense>
      <v-list-item-group
        :v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftMenu",

  data() {
    return {
      //   value: this.drawer,
    };
  },
  watch: {
    drawer() {
      this.setDrawer(this.drawer);
      return this.drawer;
    },
  },
  props: ["group", "drawer", "setDrawer"],
};
</script>

<style lang="scss" scoped></style>

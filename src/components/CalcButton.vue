<template>
  <v-col @click="clickHandle(content)" :cols="width">
    <v-btn :color="color" block><slot></slot></v-btn>
  </v-col>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: "primary"
    },
    content: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickHandle(x) {
      this.$store.dispatch("clickAction", { value: x });
    }
  }
};
</script>

<style scoped></style>

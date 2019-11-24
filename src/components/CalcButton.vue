<template>
  <v-col :cols="width">
    <v-btn :color="color" block rounded>{{ content }}</v-btn>
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
  }
};
</script>

<style scoped></style>

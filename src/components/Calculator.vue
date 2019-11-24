<template>
  <v-row>
    <CalcButton
      v-for="el in this.$store.state.layout"
      :color="el.color"
      :key="el.content"
      :width="el.width"
      :content="el.content"
    ></CalcButton>
  </v-row>
</template>

<script>
import CalcButton from "@/components/CalcButton";
export default {
  components: {
    CalcButton
  }
};
</script>

<style scoped></style>

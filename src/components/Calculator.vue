<template>
  <span>
    <v-row dense v-for="row in this.$store.state.layout" :key="row">
      <CalcButton
        v-for="el in row"
        :color="el.color"
        :key="el.content"
        :width="el.width"
        :content="el.content"
      ></CalcButton>
    </v-row>
  </span>
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

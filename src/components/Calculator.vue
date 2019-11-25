<template>
  <span>
    <v-row justify="center" dense v-for="row in layout" :key="row[0].content">
      <CalcButton
        v-for="el in row"
        :color="el.color"
        :key="el.content"
        :width="el.width"
        :content="el.content"
        >{{ el.content }}</CalcButton
      >
    </v-row>
  </span>
</template>

<script>
import CalcButton from "@/components/CalcButton";
export default {
  props: ["layout"],
  components: {
    CalcButton
  }
};
</script>

<style scoped></style>

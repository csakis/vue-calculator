<template>
  <container>
    <Header></Header>
    <Calculator />
  </container>
</template>

<script>
import Calculator from "@/components/Calculator";
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Calculator,
    Header
  }
};
</script>

<style></style>

<template>
  <el-container>
    <el-header> </el-header>
    <el-main>
      <Calculator />
    </el-main>
  </el-container>
</template>

<script>
import Calculator from "@/components/Calculator";

export default {
  name: "app",
  components: {
    Calculator
  }
};
</script>

<style></style>

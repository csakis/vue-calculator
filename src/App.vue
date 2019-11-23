<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Header></Header>
    </v-app-bar>
    <v-content>
      <Calculator />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Calculator from "@/components/Calculator";

export default {
  name: "App",

  components: {
    Header,
    Calculator
  },

  data: () => ({
    //
  })
};
</script>

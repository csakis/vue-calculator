<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Header></Header>
    </v-app-bar>
    <v-container>
      <v-content>
        <Calculator :layout="layout" />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import { layout } from "@/assets/layout";
import Calculator from "@/components/Calculator";
export default {
  name: "App",

  components: {
    Header,
    Calculator
  },

  data: () => ({
    layout
  })
};
</script>

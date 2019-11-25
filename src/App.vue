<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Header></Header>
    </v-app-bar>
    <v-container>
      <v-content>
        <v-row justify="center">
          <v-col cols="6">
            <v-card elevation="5" class="pa-3 ">
              <v-card elevation="1" class="pa-2">
                <Display />
                <Calculator :layout="layout" />
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Display from "@/components/Display";
import { layout } from "@/assets/layout";
import Calculator from "@/components/Calculator";
export default {
  name: "App",

  components: {
    Header,
    Calculator,
    Display
  },

  data: () => ({
    layout
  })
};
</script>

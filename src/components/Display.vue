<template>
  <v-row justify="center">
    <v-col cols="12" class="pb-0">
      <v-card flat dark class="text-right">
        <v-card-subtitle class="pa-1">
          {{ this.$store.state.result }}
        </v-card-subtitle>
        <v-card-subtitle class="display-1 pa-1">
          {{ this.$store.state.display }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped></style>

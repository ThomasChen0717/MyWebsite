<template>
  <v-app>
    <v-main>
      <router-view/>
      <notifications />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

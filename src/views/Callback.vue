<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>What To Do</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" class="mr-2">Buy</v-btn>
      <v-btn to="/transact" class="mr-2">Transact</v-btn>
      <v-btn to="/about" class="mr-2">Sell</v-btn>
      <v-btn to="/login" class="mr-2">Log Out</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

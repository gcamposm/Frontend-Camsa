<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Camsa</span>
        <span class="font-weight-light"> Administración</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn :to="{name: 'home'}" text>Crear</v-btn>
        <v-btn :to="{name: 'all_report'}" text>Creadas</v-btn>
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>
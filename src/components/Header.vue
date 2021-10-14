<template>
  <q-header elevated class="bg-header text-white">
    <q-toolbar>
      <q-btn class="text-white" dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <q-icon
            class="text-white"
            size="md"
            name="audiotrack"
          />
        </q-avatar>
        Music Player
      </q-toolbar-title>

    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  props: [
    'toggleLeftDrawer'
  ]
}
</script>
<style>
.bg-header{
  background: #3A3D44;
}
</style>

<template>
  <q-header elevated class="bg-header text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <q-icon
            class="text-purple"
            size="md"
            name="audiotrack"
          />
        </q-avatar>
        Music Player
      </q-toolbar-title>

      <q-btn class="text-purple" dense flat round icon="menu" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  props: [
    'toggleRightDrawer'
  ]
}
</script>
<style>
.bg-header{
  background: #3A3D44;
}
</style>

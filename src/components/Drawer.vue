<template>
  <q-drawer
    v-model="rightDrawerOpen"
    side="right"
    class="drawer"
    bordered>
    <!-- drawer content -->
  </q-drawer>
</template>
<script>
export default {
  props: [
    'rightDrawerOpen'
  ]
}
</script>
<style>
.drawer {
  background: #4c4c4c;
}
</style>

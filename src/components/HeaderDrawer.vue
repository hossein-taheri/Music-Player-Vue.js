<template>
  <Header :toggle-right-drawer="toggleRightDrawer"/>

  <Drawer :right-drawer-open="rightDrawerOpen"/>
</template>
<script>
import Header from "components/Header";
import Drawer from "components/Drawer";

export default {
  data() {
    return {
      rightDrawerOpen: false,
    }
  },
  components: {
    Header,
    Drawer,
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    }
  }
}
</script>

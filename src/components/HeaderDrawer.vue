<template>
  <Header :toggle-left-drawer="toggleLeftDrawer"/>

  <Drawer :left-drawer-open="leftDrawerOpen"/>
</template>
<script>
import Header from "components/Header";
import Drawer from "components/Drawer";

export default {
  data() {
    return {
      leftDrawerOpen: false,
    }
  },
  components: {
    Header,
    Drawer,
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  }
}
</script>

<template>
  <q-layout view="lHh lpR lFf" class="main_background">
    <HeaderDrawer/>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <Footer/>
  </q-layout>
</template>

<script>
import HeaderDrawer from "components/HeaderDrawer";
import Footer from "components/Footer";

export default {
  components: {
    HeaderDrawer,
    Footer
  }
}
</script>
<style>
.main_background{
  background: #121212;
}
</style>

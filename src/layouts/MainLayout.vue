<template>
  <q-layout view="hHr lpR fFf" class="main_background">


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
  background: #1E1E1E;
}
</style>

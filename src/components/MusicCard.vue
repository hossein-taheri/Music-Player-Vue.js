<template>
  <q-card class="card q-mr-sm">
    <q-img
      class="image"
      src="/images/music/Amelie.jpg"
    />

    <div class="q-mx-sm text-white text-center text-caption">
      <div>
        {{music?.name}}
      </div>
      <div>
        {{music?.artist}}
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  props: [
    'music'
  ]
}
</script>
<style>
.card {
  width: 150px;
  height: 220px;
  background: #1E1E1E;
}
.image{
  width: 150px;
  height: 180px;
}
</style>

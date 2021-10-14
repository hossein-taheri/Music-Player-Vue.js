<template>
  <q-card
    @click="pushTo"
    class="card q-mr-sm">
    <q-img
      class="image"
      :src="image"
    />

    <div class="q-mx-sm text-white text-center text-caption">
      <div>
        {{ artist.name }}
      </div>
    </div>
  </q-card>
</template>

<script>
import request from "src/helper/request";

export default {
  props: [
    'artist'
  ],
  data() {
    return {
      image: null
    }
  },
  mounted() {
    this.image = request.BASE_URL + this.artist.image;
  },
  methods: {
    pushTo() {
      this.$router.push({
        name: 'artist.edit',
        params: {
          artist: this.artist.id
        }
      })
    }
  }
}
</script>
<style>
.card {
  width: 150px;
  height: 220px;
  background: #1E1E1E;
}

.image {
  width: 150px;
  height: 180px;
}
</style>

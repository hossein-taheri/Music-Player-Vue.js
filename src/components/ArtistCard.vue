<template>
  <q-card
    @click="goToArtistShow"
    class="card q-mr-sm">
    <q-img
      class="image"
      :src="image"
    />

    <div class="q-mx-sm text-white text-caption row">
      <div class="col-8 text-left">
        <div>
          {{ artist.name }}
        </div>
      </div>
      <div class="col-4 text-right">
        <q-icon
          @click="goToArtistEdit"
          class="q-ma-xs"
          name="edit"
          size="sm"
        />
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
    goToArtistShow() {
      this.$router.push({
        name: 'music.index',
        params: {
          artist: this.artist.id
        }
      })
    },
    goToArtistEdit() {
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

<template>
  <q-card
    @click="goToAlbumShow"
    class="card q-mr-sm">
    <q-img
      class="image"
      :src="image"
    />

    <div class="q-mx-sm text-white text-caption row">
      <div class="col-8 text-left">
        <div>
          {{ album.name }}
        </div>
        <div>
          {{ album.year }}
        </div>
      </div>
      <div class="col-4 text-right">
        <q-icon
          @click="goToAlbumEdit"
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
    'album'
  ],
  data() {
    return {
      image: null
    }
  },
  mounted() {
    this.image = request.BASE_URL + this.album.image;
  },
  methods: {
    goToAlbumShow() {
      this.$router.push({
        name: 'music.index',
        params: {
          album: this.album.id
        }
      })
    },
    goToAlbumEdit() {
      this.$router.push({
        name: 'album.edit',
        params: {
          album: this.album.id
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

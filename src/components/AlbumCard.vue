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
        {{ album.name }}
      </div>
      <div>
        {{ album.year }}
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
    pushTo() {
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

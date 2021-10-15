<template>
  <q-card
    @click="goToGenreShow"
    class="card q-mr-sm">
    <q-img
      class="image"
      :src="image"
    />

    <div class="q-mx-sm text-white text-caption row">
      <div class="col-8 text-left">
        <div>
          {{ genre.name }}
        </div>
      </div>
      <div class="col-4 text-right">
        <q-icon
          @click="goToGenreEdit"
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
    'genre'
  ],
  data() {
    return {
      image: null
    }
  },
  mounted() {
    this.image = request.BASE_URL + this.genre.image;
  },
  methods: {
    goToGenreShow() {
      this.$router.push({
        name: 'music.index',
        params: {
          genre: this.genre.id
        }
      })
    },
    goToGenreEdit() {
      this.$router.push({
        name: 'genre.edit',
        params: {
          genre: this.genre.id
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

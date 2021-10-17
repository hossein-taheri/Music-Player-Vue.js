<template>
  <q-card
    flat
    class="q-ma-lg text-white main_card">
    <div class="text-h5">
      Add a new genre
    </div>
    <div>
      <q-input
        dark
        label="name"
        v-model="genre.name"
        color="white"
        class="q-pa-md full-width"
        style="font-size: 4vh"
      />
      <q-file
        type="file"
        dark
        accept="image/*"
        label="Image(Optional)"
        color="white"
        class="q-pa-md full-width"
        v-model="imageFile"
        v-on:change="UploadFile()"
      />
      <q-btn
        dark
        label="Create"
        style="background: #1E1E1E"
        class="q-pa-md q-ma-md full-width"
        @click="createGenre"
      />
    </div>
  </q-card>
</template>
<script>
import RequestHelper from "src/helper/request";

export default {
  data() {
    return {
      imageFile: null,
      genre: {
        name: null,
        image: null,
      },
    }
  },
  methods: {
    UploadFile(val) {
      RequestHelper
        .uploadImage(this.imageFile)
        .then(data => {
          this.genre.image = data.path.toString();
        })
        .catch(err => {
        })
    },
    createGenre() {
      let body = {
        name: this.genre.name,
      }
      if (this.genre.image) {
        body.image = this.genre.image;
      }
      RequestHelper
        .send(
          'post',
          '/genre/create',
          body
        )
        .then(() => {
          this.$router.push({
            name: 'genre.index',
            params: {
              page: 1
            }
          })
        })
        .catch(() => {

        })
    }
  }
}
</script>
<style>
.main_card {
  background: #00000000;
}
</style>

<template>
  <q-card
    flat
    class="q-ma-lg text-white main_card">
    <div class="text-h5">
      Add a new artist
    </div>
    <div>
      <q-input
        dark
        label="name"
        v-model="artist.name"
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
      artist: {
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
          this.artist.image = data.path.toString();
        })
        .catch(err => {
        })
    },
    createGenre() {
      let body = {
        name: this.artist.name,
      }
      if (this.artist.image) {
        body.image = this.artist.image;
      }
      RequestHelper
        .send(
          'post',
          '/artist/create',
          body
        )
        .then(() => {
          this.$router.push({
            name: 'artist.index',
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

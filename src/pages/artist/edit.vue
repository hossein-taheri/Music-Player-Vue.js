<template>
  <q-card
    flat
    class="q-ma-lg text-white main_card">
    <div class="text-h5">
      Edit an artist
    </div>
    <div>
      <q-input
        dark
        label="Name"
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
        label="Edit"
        style="background: #1E1E1E"
        class="q-pa-md q-ma-md full-width"
        @click="editArtist"
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
      artistId: this.$route.params.artist,
      artist: {
        name: null,
        image: null,
      },
    }
  },
  mounted() {
    this.getArtist();
  },
  methods: {
    getArtist() {
      RequestHelper
        .send(
          'get',
          `/artist/show/${this.artistId}`
        )
        .then(data => {
          this.artist = data.artist;
        })
        .catch(err => {
        })
    },
    UploadFile(val) {
      RequestHelper
        .uploadImage(this.imageFile)
        .then(data => {
          this.artist.image = data.path.toString();
        })
        .catch(err => {
        })
    },
    editArtist() {
      let body = {
        name: this.artist.name,
      }
      if (this.artist.image) {
        body.image = this.artist.image;
      }
      RequestHelper
        .send(
          'post',
          `/artist/update/${this.artistId}`,
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

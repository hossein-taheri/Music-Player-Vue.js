<template>
  <q-card
    flat
    class="q-ma-lg text-white main_card">
    <div class="text-h5">
      Edit an album
    </div>
    <div>
      <q-input
        dark
        label="Name"
        v-model="album.name"
        color="white"
        class="q-pa-md full-width"
        style="font-size: 4vh"
      />
      <q-select
        :multiple="true"
        dark
        label="Musics"
        color="white"
        class="q-pa-md full-width"
        v-model="album.musics"
        :options="musics"
        emit-value
        map-options
      />
      <q-input
        dark
        type="number"
        label="Year (Optional)"
        v-model="album.year"
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
        @click="editAlbum"
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
      albumId: this.$route.params.album,
      album: {
        name: null,
        image: null,
        year: null,
        musics: []
      },
      musics: []
    }
  },
  mounted() {
    this.getMusics(1);
    this.getAlbum();
  },
  methods: {
    getMusics(page) {
      RequestHelper
        .send(
          'get',
          '/music/index',
          {},
          {
            page
          }
        )
        .then(data => {
          data.musics.forEach(music => {
            this.musics.push({
              label: music.name,
              value: music.id
            })
          });
          if (data.musics.length !== 0)
            this.getMusics(page + 1)
        })
        .catch(err => {
        })
    },
    getAlbum() {
      RequestHelper
        .send(
          'get',
          `/album/show/${this.albumId}`
        )
        .then(data => {
          this.album = data.album;
          for (let i = 0; i < this.album.musics.length; i++) {
            this.album.musics[i] = this.album.musics[i].id;
          }
        })
        .catch(err => {
        })
    },
    UploadFile(val) {
      RequestHelper
        .uploadImage(this.imageFile)
        .then(data => {
          this.album.image = data.path.toString();
        })
        .catch(err => {
        })
    },
    editAlbum() {
      let body = {
        name: this.album.name,
        year: this.album.year,
        musics: this.album.musics
      }
      if (this.album.image) {
        body.image = this.album.image;
      }
      RequestHelper
        .send(
          'post',
          `/album/update/${this.albumId}`,
          body
        )
        .then(() => {
          this.$router.push({
            name: 'album.index',
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

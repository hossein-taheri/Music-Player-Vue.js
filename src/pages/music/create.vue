<template>
  <q-card
    flat
    class="q-ma-lg text-white main_card">
    <div class="text-h5">
      Add a new music
    </div>
    <div>
      <q-file
        type="file"
        accept="audio/*"
        dark
        label="music"
        color="white"
        class="q-pa-md full-width"
        v-model="audioFile"
        v-on:change="UploadMusic()"
      />
      <q-input
        dark
        label="name"
        v-model="music.name"
        color="white"
        class="q-pa-md full-width"
      />
      <q-file
        type="file"
        accept="image/*"
        dark
        label="image (Optional)"
        color="white"
        class="q-pa-md full-width"
        v-model="imageFile"
        v-on:change="UploadImage()"
      />
      <q-input
        type="number"
        dark
        label="Year (Optional)"
        color="white"
        class="q-pa-md full-width"
        v-model="music.year"
        v-on:change="UploadImage()"
      />
      <q-input
        type="textarea"
        dark
        label="Lyric (Optional)"
        color="white"
        class="q-pa-md full-width"
        v-model="music.lyric"
      />
      <q-select
        :multiple="true"
        dark
        label="Artists"
        color="white"
        class="q-pa-md full-width"
        v-model="music.artists"
        :options="artists"
        emit-value
        map-options
      />
      <q-select
        :multiple="true"
        dark
        label="Genres"
        color="white"
        class="q-pa-md full-width"
        v-model="music.genres"
        :options="genres"
        emit-value
        map-options
      />
      <q-btn
        dark
        label="Create"
        style="background: #1E1E1E"
        class="q-pa-md q-ma-md full-width"
        @click="createMusic"
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
      audioFile: null,
      music: {
        name: null,
        link: null,
        year: null,
        lyric: null,
        image: null,
        artists: [],
        genres: [],
      },
      artists: [],
      genres: [],
    }
  },
  mounted() {
    this.artists = [];
    this.getGenres();
    this.getArtists(1);
  },
  methods: {
    getGenres() {
      RequestHelper
        .send(
          'get',
          '/genre/index',
          {},
          {}
        )
        .then(data => {
          this.genres = [];
          data.genres.forEach(genre => {
            this.genres.push({
              label: genre.name,
              value: genre.id
            })
          });
        })
        .catch(err => {
        })
    },
    getArtists(page) {
      RequestHelper
        .send(
          'get',
          '/artist/index',
          {},
          {
            page
          }
        )
        .then(data => {
          data.artists.forEach(genre => {
            this.artists.push({
              label: genre.name,
              value: genre.id
            })
          });
          if (data.artists.length !== 0)
            this.getArtists(page + 1);
        })
        .catch(err => {
        })
    },
    UploadMusic() {
      RequestHelper
        .uploadAudio(this.audioFile)
        .then(data => {
          this.music.link = data.path.toString();
          this.music.name = data['original-name'].toString();
        })
        .catch(err => {
        })
    },
    UploadImage(val) {
      RequestHelper
        .uploadImage(this.imageFile)
        .then(data => {
          this.music.image = data.path.toString();
        })
        .catch(err => {
        })
    },
    createMusic() {
      let body = {
        name: this.music.name,
        link: this.music.link,
        artists: this.music.artists,
        genres: this.music.genres,
      }
      if (this.music.image)
        body.image = this.music.image;
      if (this.music.year)
        body.year = this.music.year;
      if (this.music.lyric)
        body.lyric = this.music.lyric;


      RequestHelper
        .send(
          'post',
          '/music/create',
          body
        )
        .then(() => {
          this.$router.push({
            name: 'music.index',
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

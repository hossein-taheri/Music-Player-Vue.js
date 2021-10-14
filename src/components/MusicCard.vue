<template>
  <q-card
    @click="play"
    class="card q-mr-sm">
    <q-img
      class="image"
      :src="imageLink"
    />

    <div class="q-mx-sm text-white text-center text-caption">
      <div>
        {{ musicName }}
      </div>
      <div>
        {{ artistsNames }}
      </div>
    </div>
  </q-card>
</template>

<script>
import MusicPlayer from "src/helper/music_player";
import request from "src/helper/request";

export default {
  props: [
    'music'
  ],
  data() {
    return {
      musicName: '',
      musicLink: '',
      imageLink: '',
      artistsNames: '',
    }
  },
  mounted() {
    this.musicName = this.music.name;
    this.imageLink = request.BASE_URL + this.music.image;
    this.musicLink = request.BASE_URL + this.music.link;
    this.music.artists.forEach(artist => {
      this.artistsNames += artist.name + " ";
    })
  },
  methods: {
    play() {
      MusicPlayer.loadList([
        {
          id: this.music.id,
          name: this.musicName,
          link: this.musicLink,
          image: this.imageLink,
          artists: this.artists
        }
      ])
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

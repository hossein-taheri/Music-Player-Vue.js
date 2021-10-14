<template>
  <q-footer elevated class="bg-header text-white">
    <q-toolbar class="row">
      <q-img
        class="col-1"
        src="/images/music_image.png"/>
      <div class="col-11">
        <div class="column">
          <div class="col-4 row">
            <div class="col-1"/>
            <div class="col-11 text-left">
              <div class="column">
                <div class="music_name_font col-8">
                  Music Name
                </div>
                <div class="music_artist_font col-4">
                  Artist Name
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 row">
            <div class="col-1"/>
            <div class="col-2 text-left music_duration_font">
              <div class="col-4 items-center">
                00:00
              </div>
            </div>
            <q-btn
              @click="previous"
              icon="skip_previous"
              size="lg"
              class="col-2"
              flat
            />
            <q-btn
              v-if="!playing"
              icon="play_circle"
              size="lg"
              class="col-2"
              flat
              @click="playPause"
            />
            <q-btn
              v-else
              icon="pause_circle"
              size="lg"
              class="col-2"
              flat
              @click="playPause"
            />
            <q-btn
              @click="next"
              icon="skip_next"
              size="lg"
              class="col-2"
              flat
            />
            <div class="col-2 text-right music_duration_font">
              <div class="col-4 items-center">
                04:05
              </div>
            </div>
            <div class="col-1"/>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>
<script>
import MusicPlayer from "src/helper/music_player";

export default {
  data() {
    return {
      playing: false,
    }
  },
  mounted() {
    MusicPlayer.loadList(['/musics/e.mp3', '/musics/g.mp3', '/musics/n.mp3'])
  },
  methods: {
    async playPause() {
      this.playing = !this.playing;
      if (this.playing) {
        if (!await MusicPlayer.play()) {
          this.playing = !this.playing;
        }
      } else {
        await MusicPlayer.pause();
      }
    },
    async next() {
      await MusicPlayer.next()
      if (!this.playing) {
        this.playing = true;
      }
    },
    async previous() {
      await MusicPlayer.previous()
      if (!this.playing) {
        this.playing = true;
      }
    }
    ,
  }
}
</script>
<style>
.music_image {
  width: 50px;
  height: 50px;
}

.bg-header {
  background: #3A3D44;
}

.music_name_font {
  font-size: 2vh;
}

.music_artist_font {
  font-size: 1.5vh;
}

.music_duration_font {
  font-size: 2vh;
}

.music_btn {
  background: #00000000;
}
</style>

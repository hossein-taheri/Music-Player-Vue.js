<template>
  <q-footer
    v-show="isFooterVisible"
    elevated
    class="bg-header text-white">
    <q-toolbar class="row">
      <div class="col-12">
        <div class="column">
          <div class="col-4 row">
            <div class="col-12 text-center">
              <div class="column">
                <div class="text-subtitle1 col-8">
                  {{ name }}
                </div>
                <div class="text-subtitle2 col-4">
                  {{ artists }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 row text-center">
            <div class="col-1"/>
            <div class="col-2 text-left text-subtitle1">
              <div class="col-4 text-center">
                {{ currentTime }}
              </div>
            </div>
            <q-btn
              id="skip_previous_btn"
              @click="previous"
              icon="skip_previous"
              size="lg"
              class="col-2"
              flat
            />
            <q-btn
              id="play_circle_btn"
              v-if="!playing"
              icon="play_circle"
              size="lg"
              class="col-2"
              flat
              @click="playPause"
            />
            <q-btn
              id="pause_circle_btn"
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
            <div class="col-2 text-right">
              <div class="col-4 items-center">
                {{ duration }}
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
      isFooterVisible: false,
      playing: false,
      name: "",
      artists: "",
      duration: "00:00",
      currentTime: "00:00",
    }
  },
  mounted() {
    this.setFooter();
  },
  methods: {
    setFooter() {
      MusicPlayer.setFooter(this)
    },
    async playPause() {
      if (this.playing) {
        await MusicPlayer.pause()
      } else {
        await MusicPlayer.play();
      }
    },
    async next() {
      await MusicPlayer.next()
    },
    async previous() {
      await MusicPlayer.previous()
    },
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

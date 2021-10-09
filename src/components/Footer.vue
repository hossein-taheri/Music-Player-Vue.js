<template>
  <q-footer elevated class="bg-header text-white">
    <q-toolbar class="row">
      <q-img
        class="col-1"
        src="/images/music_image.png"/>
      <div class="col-11">
        <div class="column">
          <div class="col-4 row">
            <div class="col-3 text-center music_duration_font">
              <div class="column">
                <div class="col-4"/>
                <div class="col-4">
                  00:00
                </div>
                <div class="col-4"/>
              </div>
            </div>
            <div class="col-6 text-center">
              <div class="column">
                <div class="music_name_font col-8">
                  Music Name
                </div>
                <div class="music_artist_font col-4">
                  Artist Name
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="column">
                <div class="col-4"/>
                <div class="col-4">
                  04:05
                </div>
                <div class="col-4"/>
              </div>
            </div>
          </div>
          <div class="col-8 row">
            <div class="col-3"/>
            <q-btn
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
              icon="skip_next"
              size="lg"
              class="col-2"
              flat
            />
            <div class="col-3"/>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>
<script>
export default {
  data() {
    return {
      playing: true,
    }
  },
  methods: {
    playPause() {
      this.playing = !this.playing;
      //TODO :: code here
    }
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

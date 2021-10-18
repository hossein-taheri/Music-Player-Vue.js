<template>
  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    class="drawer"
    bordered>
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <q-list class="text-white" padding>

        <q-item
          :to="{name:'home.index'}"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item
          :to="{
            name:'music.index',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="music_note"/>
          </q-item-section>

          <q-item-section>
            Musics
          </q-item-section>
        </q-item>

        <q-item
          :to="{
            name:'genre.index',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="category"/>
          </q-item-section>

          <q-item-section>
            Genres
          </q-item-section>
        </q-item>

        <q-item
          :to="{
            name:'artist.index',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="art_track"/>
          </q-item-section>

          <q-item-section>
            Artists
          </q-item-section>
        </q-item>

        <q-item
          :to="{
            name:'album.index',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="album"/>
          </q-item-section>

          <q-item-section>
            Albums
          </q-item-section>
        </q-item>

        <q-separator dark/>

        <q-item
          :to="{
            name:'music.create',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>

          <q-item-section avatar>
            <q-icon name="music_note"/>
          </q-item-section>

          <q-item-section>
            Add a music
          </q-item-section>
        </q-item>

        <q-item
          :to="{
            name:'genre.create',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>

          <q-item-section avatar>
            <q-icon name="category"/>
          </q-item-section>

          <q-item-section>
            Add a genre
          </q-item-section>
        </q-item>

        <q-item
          :to="{
            name:'artist.create',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>

          <q-item-section avatar>
            <q-icon name="category"/>
          </q-item-section>

          <q-item-section>
            Add an artist
          </q-item-section>
        </q-item>


        <q-item
          :to="{
            name:'album.create',
            params:{
              page :1
            }
          }"
          clickable
          v-ripple>

          <q-item-section avatar>
            <q-icon name="album"/>
          </q-item-section>

          <q-item-section>
            Add an album
          </q-item-section>
        </q-item>

      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="/images/music/index.webp"
      style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <div class="text-white">Music Player</div>
      </div>
    </q-img>
  </q-drawer>
</template>
<script>
export default {
  props: [
    'leftDrawerOpen'
  ],
  methods: {
    PushTo(name) {
      this.$router.push({
        name: name
      })
    }
  }
}
</script>
<style>
.drawer {
  background: #4c4c4c;
}

.q-item.q-router-link--active {
  color: #000;
}
</style>

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
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="musics"/>
          </q-item-section>

          <q-item-section>
            Musics
          </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="star"/>
          </q-item-section>

          <q-item-section>
            Star
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send"/>
          </q-item-section>

          <q-item-section>
            Send
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts"/>
          </q-item-section>

          <q-item-section>
            Drafts
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
  ]
}
</script>
<style>
.drawer {
  background: #4c4c4c;
}
</style>

<template>
  <div class="row">
    <div class="col-11 text-white text-h6">
      {{ title }}
    </div>
    <div
      v-if="hasMore"
      class="col-1 text-center text-white text-subtitle2">
      <q-btn
        flat
        @click="moreButtonClicked">
        more
      </q-btn>
    </div>
  </div>
  <q-scroll-area style="height: 220px; max-width: 100vw;">
    <div class="row no-wrap">
      <slot/>
    </div>
  </q-scroll-area>
</template>
<script>
export default {
  props: [
    'title',
    'hasMore',
    'moreButtonClicked',
  ]
}
</script>

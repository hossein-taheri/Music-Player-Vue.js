<template>
  <q-card
    class="q-card-background q-mx-lg q-my-md row"
    flat
  >
    <ArtistCard
      v-for="(artist,index) in artists"
      :key="index"
      :artist="artist"
    />
  </q-card>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="white"
      textColor="black"
      :max="pageCount"
      :max-pages="6"
      :boundary-numbers="false"
    />
  </div>

  <div style="width: 100%" class="text-right">
    <q-btn :to="{name:'artist.create'}" class="q-mr-md " round size="md" color="black" icon="add"/>
  </div>
</template>
<script>
import RequestHelper from "src/helper/request";
import HorizontalListItems from "components/HorizontalListItems";
import ArtistCard from "components/ArtistCard";


export default {
  data() {
    return {
      artists: [],
      current: 0,
      pageCount: 0,
    }
  },
  components: {
    HorizontalListItems,
    ArtistCard
  },
  watch: {
    current() {
      this.$route.params.page = this.current;
      this.getArtistsData();
    }
  },
  mounted() {
    this.current = this.$route.params.page || 1;
    this.getArtistsData();
  },
  methods: {
    getArtistsData() {
      let query = {
        page: this.current,
      };

      this.artists = [];

      RequestHelper
        .send(
          'get',
          'artist/index',
          {},
          query
        )
        .then(data => {
          this.artists = data.artists;
          this.pageCount = data.pageCount;
          this.current = data.page;
        })
        .catch(err => {

        })
    }
  }

}
</script>
<style>
.q-card-background {
  background: #00000000;
}
</style>

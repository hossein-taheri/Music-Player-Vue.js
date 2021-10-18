<template>
  <div class="q-mx-lg q-my-md row">
    <q-select
      class="col-6"
      dark
      outlined
      color="white"
      label="Sort by"
      emit-value
      map-options
      v-model="order"
      :options="orders"
    />
    <q-select
      class="col-6"
      dark
      outlined
      emit-value
      map-options
      color="white"
      label="Genre"
      v-model="genre"
      :options="genres"
    />
  </div>
  <q-card
    class="q-card-background q-mx-lg q-my-md row"
    flat
  >

    <MusicCard
      v-for="(music,index) in musics"
      :key="index"
      :music="music"
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

</template>
<script>
import RequestHelper from "src/helper/request";
import HorizontalListItems from "components/HorizontalListItems";
import MusicCard from "components/MusicCard";


export default {
  data() {
    return {
      musics: [],
      current: 0,
      pageCount: 0,
      order: 'Newest',
      genre: null,
      orders: [
        {
          label: 'Newest',
          value: 'Newest'
        },
        {
          label: 'Favorite',
          value: 'Favorite'
        },
      ],
      genres: [],
    }
  },
  components: {
    HorizontalListItems,
    MusicCard
  },
  watch: {
    current() {
      this.$route.params.page = this.current;
      this.getMusicsData();
    },
    order() {
      this.getMusicsData();
    },
    genre() {
      this.getMusicsData();
    },
  },
  mounted() {
    this.getParameters();
    this.getMusicsData();
    this.getGenresData();
  },
  methods: {
    getParameters() {
      this.current = this.$route.params.page || 1;
      this.artists = this.$route.params.artist ? [parseInt(this.$route.params.artist)] : null;
      this.albums = this.$route.params.album ? [parseInt(this.$route.params.album)] : null;
      this.genre = this.$route.params.genre ? parseInt(this.$route.params.genre) : null;
      if (this.$route.params['by_favorite']) {
        this.order = 'Favorite'
      } else {
        this.order = 'Newest'
      }
    },
    getMusicsData() {
      let query = {
        page: this.current,
      };
      if (this.order)
        query['order'] = this.order.toLowerCase();
      if (this.artists)
        query['artists'] = this.artists;
      if (this.albums)
        query['albums'] = this.albums;
      if (this.genre && this.genre !== -1)
        query['genres'] = [this.genre];


      this.musics = [];

      RequestHelper
        .send(
          'get',
          '/music/index',
          {},
          query
        )
        .then(data => {
          this.musics = data.musics;
          this.pageCount = data.pageCount;
          this.current = data.page;
        })
        .catch(err => {

        })
    },
    getGenresData() {
      RequestHelper
        .send(
          'get',
          '/genre/index',
          {},
          {}
        )
        .then(data => {
          this.genres = [{
            label: 'All',
            value: -1
          }];

          data.genres.forEach(genre => {
            this.genres.push({
              label: genre.name,
              value: genre.id
            })
          });
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

<template>
  <q-card
    class="q-card-background q-mx-lg q-my-md row"
    flat
  >
    <GenreCard
      v-for="(genre,index) in genres"
      :key="index"
      :genre="genre"
    />
  </q-card>
</template>
<script>
import RequestHelper from "src/helper/request";
import HorizontalListItems from "components/HorizontalListItems";
import GenreCard from "components/GenreCard";


export default {
  data() {
    return {
      genres: [],
    }
  },
  components: {
    HorizontalListItems,
    GenreCard
  },
  watch: {
  },
  mounted() {
    this.getAlbumsData();
  },
  methods: {
    getAlbumsData() {

      this.genres = [];

      RequestHelper
        .send(
          'get',
          'genre/index',
          {},
        )
        .then(data => {
          this.genres = data.genres;
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

<template>
  <q-page
    class="q-mx-lg q-my-md"
  >
    <HorizontalListItems
      title="Newest"
      :has-more="true"
      more-button-clicked="goToLastAdded">
      <MusicCard
        v-for="(music,index) in newest" :key="index"
        :music="music"
      />
    </HorizontalListItems>
    <HorizontalListItems
      title="Favorites"
      :has-more="true"
      more-button-clicked="goToFavorite">
      <MusicCard
        v-for="(music,index) in favorites" :key="index"
        :music="music"
      />
    </HorizontalListItems>
  </q-page>
</template>

<script>
import HorizontalListItems from "components/HorizontalListItems";
import MusicCard from "components/MusicCard";
import RequestHelper from "src/helper/request";

export default {
  components: {
    MusicCard,
    HorizontalListItems
  },
  data() {
    return {
      newest: [],
      favorites: [],
    }
  },
  mounted() {
    this.getIndexData();
  },
  methods: {
    getIndexData() {
      RequestHelper
        .send(
          'get',
          '/',
        )
        .then(data => {
          this.newest = data.newest ;
          this.favorites = data.favorites ;
          console.log({

          })
        })
        .catch(err => {

        })
    }
  }

}

</script>

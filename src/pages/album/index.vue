<template>
  <q-card
    class="q-card-background q-mx-lg q-my-md row"
    flat
  >
    <AlbumCard
      v-for="(album,index) in albums"
      :key="index"
      :album="album"
      @click="playAlbum(index)"
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
    <q-btn :to="{name:'album.create'}" class="q-mr-md " round size="md" color="black" icon="add"/>
  </div>

</template>
<script>
import RequestHelper from "src/helper/request";
import HorizontalListItems from "components/HorizontalListItems";
import AlbumCard from "components/AlbumCard";
import musicPlayer from "../../helper/music_player";
import request from "src/helper/request";


export default {
  data() {
    return {
      albums: [],
      current: 0,
      pageCount: 0,
    }
  },
  components: {
    HorizontalListItems,
    AlbumCard
  },
  watch: {
    current() {
      this.$route.params.page = this.current;
      this.getAlbumsData();
    }
  },
  mounted() {
    this.current = this.$route.params.page || 1;
    this.getAlbumsData();
  },
  methods: {
    getAlbumsData() {
      let query = {
        page: this.current,
      };

      this.albums = [];

      RequestHelper
        .send(
          'get',
          'album/index',
          {},
          query
        )
        .then(data => {
          this.albums = data.albums;
          this.pageCount = data.pageCount;
          this.current = data.page;
        })
        .catch(err => {

        })
    },
    playAlbum(index) {

      for (let i = 0; i < this.albums[index].musics.length; i++) {
        let str = '';
        this.albums[index].musics[i].image = request.BASE_URL + this.albums[index].musics[i].image ;
        this.albums[index].musics[i].link = request.BASE_URL + this.albums[index].musics[i].link ;
        this.albums[index].musics[i].artists.forEach(artist => {
          str += artist.name + " ";
        })
        this.albums[index].musics[i].artists = str;
      }
      musicPlayer.loadList(
        this.albums[index].musics
      )
    }
  }

}
</script>
<style>
.q-card-background {
  background: #00000000;
}
</style>

<template>
  <q-page
    class="q-mx-lg q-my-md"
  >
    <HorizontalListItems
      title="Newest"
      :has-more="true"
      more-button-clicked="goToLastAdded">
      <MusicCard
        v-for="n in 12" :key="n"
        :music="{
          name : 'Music Name',
          artist : 'Artist Name',
        }"
      />
    </HorizontalListItems>
    <HorizontalListItems
      title="Favorites"
      :has-more="true"
      more-button-clicked="goToFavorite">
      <MusicCard
        v-for="n in 12" :key="n"
        :music="{
          name : 'Music Name',
          artist : 'Artist Name',
        }"
      />
    </HorizontalListItems>
    <HorizontalListItems
      title="newest"
      :has-more="true"
      more-button-clicked="goToLastAdded">
      <MusicCard
        v-for="n in 12" :key="n"
        :music="{
          name : 'Music Name',
          artist : 'Artist Name',
        }"
      />
    </HorizontalListItems>
  </q-page>
</template>

<script>
import HorizontalListItems from "components/HorizontalListItems";
import MusicCard from "components/MusicCard";

export default {
  components: {
    MusicCard,
    HorizontalListItems
  }
}

</script>

<template>
  <div>
    <div class="container">
      <img src="https://thebeatmegaclub.com.au/wp-content/uploads/2019/08/sarthak-navjivan-iTZOPe7BpTM-unsplash.jpg" alt="Snow" style="width:100%; height: 100%;">
      <h3 class="centered">Welcome to The Beat!</h3>
    </div>
    <p class="next-up">Next up: Slow dancing in the dark by Joji</p>
    <song-list :songs="songs"></song-list>
  </div>
</template>

<style scoped>
.next-up {
  text-align: center;
  font-size: 1.5em;
}

.container {
  position: relative;
  text-align: center;
  color: white;
  height: 200px;
}

.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import {songArray} from "../pages/songs.ts"
import SongList from "../components/SongList.vue"
export default {
  components: {SongList},
  data() {
    return {
      songs: songArray
    }
  }
}
</script>
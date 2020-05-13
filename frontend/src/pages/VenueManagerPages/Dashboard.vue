<template>
  <q-page class="row justify-center ">
    <q-card
      :style="{
        padding: '10px',
        width: '800px',
        marginTop: '3%'
      }"
    >
      <div class="row no-wrap items-center">
        <q-img
          class="justify-center"
          style="max-width: 500px; max-height: 500px;"
          src="https://thebeatmegaclub.com.au/wp-content/uploads/2019/08/sarthak-navjivan-iTZOPe7BpTM-unsplash.jpg"
        />
        <q-btn style="padding: 2px; margin:10px" flat @click="move('edit')"
          >Edit Venue</q-btn
        >
        <q-btn style="padding: 2px; margin:10px" flat @click="move('patrons')"
          >View Patrons</q-btn
        >
      </div>

      <div class="row no-wrap items-center" style="padding: 10px">
        <div class="col text-h3 ellipsis">
          Prohibition
        </div>
        <div class="text-subtitle1"></div>
      </div>

      <div class="column" style="padding: 10px">
        <div class="text-subtitle1">
          Current Users ({{ users.length }} online)
        </div>
        <template v-for="user in users">
          <div class="text-caption text-grey" :key="user">
            {{ user }} - {{ numberOfVisits() }} visits
          </div>
        </template>
        <q-separator />
        <div class="text-subtitle1" style="padding-top:40px;">
          Upcoming Songs
        </div>
        <song-list :songs="songs" style="padding-top:30px;"/>
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import SongList from 'components/SongList.vue';
import { Song } from 'components/models';
import { songArray } from '../songs';

export default {
  name: 'PageIndex',
  components: { SongList },
  data() {
    const songs: Song[] = songArray;
    const users: string[] = [
      'Aidan Kinzett',
      'Thornton Mills',
      'Jaiymn Mayer',
      'Conor Brosnan',
      'Jon Snow',
      'Walter White'
    ];
    return { songs, users };
  },
  methods: {
    numberOfVisits(): number {
      return Math.floor(Math.random() * Math.floor(20));
    },
    move(to: string) {
      window.location.href = '/' + to;
    }
  }
};
</script>

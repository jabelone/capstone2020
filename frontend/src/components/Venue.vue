<template>
  <q-card class="my-card">
      <q-img src="https://thebeatmegaclub.com.au/wp-content/uploads/2019/08/sarthak-navjivan-iTZOPe7BpTM-unsplash.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="fas fa-route"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            The Beat
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="fas fa-map-marker-alt" />
            250 m
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・6 Online・ Music, Pub Food・
        </div>
        <div class="text-caption text-grey">
          The ultimate party destination.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
<!--        <q-btn flat round icon="fas fa-arrow-right" />-->
        <q-btn flat color="primary">
          Join Venue
        </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'Venue',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

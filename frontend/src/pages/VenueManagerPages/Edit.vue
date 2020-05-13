<template>
  <q-page class="column justify-start items-center">
    <q-card :style="{ padding: '10px', width: '400px', marginTop: '10%' }">
      <q-card-section>
        <div class="text-h5">Edit Venue</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="name" label="Venue Name" />
        <q-input v-model="location" label="Location" />
      </q-card-section>

      <q-card-actions>
        <q-btn flat @click="save">Cancel</q-btn>
        <q-btn flat @click="save">Save</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'PageIndex',
  components: {},
  data() {
    return {
      name: 'Prohibition',
      location: 'The Valley'
    };
  },
  methods: {
    save() {
      window.location.href = '/manage';
    }
  }
};
</script>

<style></style>

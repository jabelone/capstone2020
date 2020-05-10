<template>
  <q-page class="column justify-center items-center">
    <q-card :style="{ padding: '10px', width: '400px', marginBottom: '50px' }">
      <q-card-section>
        <div class="text-h5">Login</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="text" label="Username" />
        <q-input v-model="password" type="password" label="Password" />
      </q-card-section>
      <q-seperator />
      <q-card-actions>
        <q-btn flat>Login</q-btn>
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
      text: '',
      password: ''
    };
  }
};
</script>

<style></style>

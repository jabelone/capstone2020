<template>
  <q-page class="column justify-start items-center">
    <q-card :style="{ padding: '10px', width: '400px', marginTop: '10%' }">
      <q-card-section>
        <div class="text-h5">Register</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="text" label="First Name" />
        <q-input v-model="text" label="Last Name" />
        <q-input v-model="text" label="Email" type="email" />
        <q-input v-model="password" type="password" label="Password" />
      </q-card-section>
      <q-seperator />
      <q-card-actions>
        <q-btn flat @click="register">Register</q-btn>
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
  },
  methods: {
    register() {
      console.log('register');
    }
  }
};
</script>

<style></style>

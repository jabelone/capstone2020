<template>
  <div style="padding: 50px">
    <q-page class="row justify-start items-start content-start">
      <template v-for="item in [1, 2, 3]">
        <q-card class="my-card" :key="item">
          <div
            v-ripple
            @click="this.$router.push('/venue/example')"
            class="cursor-pointer relative-position"
          >
            <q-img
              src="https://thebeatmegaclub.com.au/wp-content/uploads/2019/08/sarthak-navjivan-iTZOPe7BpTM-unsplash.jpg"
              basic
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                The Beat
              </div>
            </q-img>
          </div>
          <q-card-section>
            The ultimate party destination.
          </q-card-section>
        </q-card>
      </template>
    </q-page>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageIndex',
  components: {},
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
  margin: 10px
</style>

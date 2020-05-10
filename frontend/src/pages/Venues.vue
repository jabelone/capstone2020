<template>
  <div style="padding: 50px">
    <q-page class="row justify-start items-start content-start">
      <template v-for="item in [1, 2, 3]">
        <q-card class="my-card">
          <div
            v-ripple
            @click="doSomething"
            class="cursor-pointer relative-position"
            :key="item"
          >
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </div>
          <q-card-section>
            This is a venue listing
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
  methods: {
    doSomething() {
      this.$router.go('/venue/example');
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
  margin: 10px
</style>

<template>
  <q-virtual-scroll
    style="max-height: 500px;"
    :items="songs"
    separator
  >
    <template v-slot="{ item, index }">
      <q-item
        :key="index"
        dense
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="item.url">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.artist }} </q-item-label>
          
        </q-item-section>
      </q-item>
    </template>
  </q-virtual-scroll>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    songs: {
      type: Array,
      required: true,
    }
  }
}
</script>
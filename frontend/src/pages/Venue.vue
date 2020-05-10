<template>
  <venue />
</template>

<script>
import Venue from '../components/Venue';
export default {
  name: 'VenuePage',
  components: {Venue},
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

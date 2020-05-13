<template>
  <div style="padding: 50px">
    <q-btn flat @click="back">
      Back
    </q-btn>
    <q-page class="">
      <q-table
        title="Patrons"
        :data="users"
        :columns="columns"
        row-key="name"
      />
    </q-page>
  </div>
</template>

<script lang="ts">
import userArray from '../users';
export default {
  name: 'Patrons',
  data() {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true
        },
        {
          name: 'lastVisit',
          required: true,
          label: 'Last Visit',
          align: 'left',
          field: 'lastVisit',
          sortable: true
        },
        {
          name: 'visits',
          required: true,
          label: 'Visits',
          align: 'left',
          field: 'visits',
          sortable: true
        }
      ],
      users: userArray
    };
  },
  methods: {
    back() {
      window.location.href = '/manage';
    }
  }
};
</script>

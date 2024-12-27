<template>
  <section class="my-5">
    <UITheTable :options="table1" />
  </section>
  <section class="my-5">
    <UITheTable :options="table2" />
  </section>
  <section>
    <ThePagination />
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      table1: [
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
      ],
      table2: [
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
        {
          name: 'Название записи',
          date: '14.01.2024 17:34:23',
          status: 'Начало',
          col1: 'Значение',
          col2: 'Значение'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .pagination {
    max-width: 40%;
    .v-btn--icon.v-btn--density-default {
      width: calc(var(--v-btn-height) + 1px);
      height: calc(var(--v-btn-height) + 1px);
    }
  }
</style>
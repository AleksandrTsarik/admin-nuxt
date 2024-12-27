<template>
  <section>
      <TheTopMenu />
    </section>
  <div class="wrapper">
    <section class="my-5">
      <UITheTable :options="table1" />
    </section>
  </div>
</template>

<script>
export default {
  data () {
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
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
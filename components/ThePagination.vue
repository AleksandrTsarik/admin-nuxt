<template>
  <div class="text-center pagination">
    <v-pagination
      v-model="page"
      :length="20"
      rounded="circle"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  }
}
</script>

<style>

</style>
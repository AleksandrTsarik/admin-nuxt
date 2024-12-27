<template>
  <div class="registration">
    <div class="registration__btns align-left">
      <!-- href исправть на :to="item.url" когда будут прописаны все url!!!! -->
      <v-btn 
        v-for="(item, i) in btn"
        :key="i"
        variant="text"
        class="registration__btn"
        size="large"
        :href="item.url"
      >{{ item.name }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btn: [
        {
          name: 'Настройки',
          url: '#/'
        },
        {
          name: 'Выход',
          url: '/'
        },
        {
          name: 'Заказы',
          url: '/order'
        },
        {
          name: 'Позиции заказов',
          url: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .registration {
    background-color: var(--white);
    position: absolute;
    left: -20px;
    top: 0;
    bottom: 0;
    display: block;
    height: 100%;
    width: 100%;
    max-width: 400px;
    padding: 20px 10px 0 30px;
    &__btns {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 0 20px;
    }
    &__btn {
      justify-content: start !important;
      margin-bottom: 15px;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--strip);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
      }
      &:nth-child(3) {
        margin-bottom: 0;
        &::before {
          display: none;
        }
      }
      .v-btn__content {
        font-size: 1em;
        justify-content: start
      }
    }
  }
</style>
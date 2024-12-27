<template>
    <v-app>
      <div class="page-wrap">
        <v-card >
          <v-layout class="nav-wrap"  color="primary">
              <v-navigation-drawer class="nav-menu nav-menu__field" permanent location="left"  >
                  <v-list 
                    @click="method"
                    density="compact"
                    nav 
                    class="nav-menu__list"
                    color="primary"
                  >
                    <v-list-item
                      class="nav-menu__item"
                      v-for="(item, i) in nav"
                      :key="i"
                      :title="item.title"
                      :value="item.value"
                      :to="item.url"
                      color="teal"
                    ><v-icon>{{ item.ico }}</v-icon></v-list-item>
                  </v-list>
              </v-navigation-drawer>
              <v-main class="main" style="--v-layout-left: 150px"><slot /></v-main>
          </v-layout>
        </v-card>
      </div>
    </v-app>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          {
            ico: 'mdi-account',
            name: 'Аккаунт',
            url: '/registration',
            title: 'Аккаунт',
            value: 'Аккаунт'
          },
          {
            ico: 'mdi-account-multiple',
            name: 'Пользователи',
            url: '/user',
            title: 'Пользователи',
            value: 'Пользователи'
          },
          {
            ico: 'mdi-card-multiple',
            name: 'Товары',
            url: '/product',
            title: 'Товары',
            value: 'Товары'
          },
          {
            ico: 'mdi-offer',
            name: 'Заказы',
            url: '/order',
            title: 'Заказы',
            value: 'Заказы'
          },
          {
            ico: 'mdi-calendar',
            name: 'Содержание',
            url: '/',
            title: 'Содержание',
            value: 'Содержание'
          },
          {
            ico: 'mdi-cog-outline',
            name: 'Настройки',
            url: '/setting',
            title: 'Настройки',
            value: 'Настройки'
          },
          {
            ico: 'mdi-chart-bar',
            name: 'Маркетинг',
            url: '/',
            title: 'Маркетинг',
            value: 'Маркетинг'
          },
        ],
        page: 1,
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
.nav-wrap {}
.nav-menu {
  &__field {
    height: 100%;
    background-color: var(--menuNav)!important;
    max-width: 150px!important;
    flex: 0 0 150px;
    width: 100%;
  }
  &__list {
    color: var(--strip)!important;
  }
  &__item {
    margin-bottom: 1em!important;
    .v-list-item__content {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
    }
    .v-list-item-title {
      font-size: 1em!important;
    }
    .v-icon {
      margin: 0 auto;
      font-size: 2em!important;
    }
  }
}
</style>
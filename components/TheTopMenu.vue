<template>
  <div class="top-menu">
    <div class="top-menu__item">
      <div class="top-menu__name">НАЗВАНИЕ РАЗДЕЛА</div>

      <div class="top-menu__btn-position">
        <v-btn-toggle v-model="value" :mandatory="true" >
          <v-btn 
            variant="text"
            value="btn-horizontal" 
            icon="mdi-reorder-horizontal"
            style="--v-btn-height: auto"
          >
          </v-btn>
          <v-btn 
            variant="text"
            value="btn-vertical"
            icon="mdi-reorder-vertical"
            style="--v-btn-height: auto"
          >
          </v-btn>
        </v-btn-toggle>
      </div>
      
    </div>
    <div class="top-menu__item">
      <div class="top-menu__choice">
        <!-- <v-text-field
          :rules="rules"
          hide-details="auto"
          icon="mdi-magnify"
        ><v-icon>mdi-magnify</v-icon></v-text-field> -->

        <v-card class="top-menu__input">
          <v-card-text>
            <v-text-field
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="top-menu__item">
      <div class="top-menu__write">123 записи</div>
      <div class="top-menu__perform">
        <v-btn
          variant="text"
          @click="menuOpen"
          :class="{'is-open': isOpenMenu}"
        >Выполнить</v-btn>
        <div 
          class="top-menu__perform-drop top-menu-perform" 
          :class="{'is-open': isOpenMenu}"
        >
          <div class="top-menu-perform__box">

            <div class="top-menu-perform__item">
              <div class="top-menu-perform__choice">
                <v-card
                  class="mx-auto"
                >
                  <v-list density="compact">
                    <v-list-item
                      v-for="(item, i) in choice"
                      :key="i"
                      :value="item"
                      color="primary"
                    >
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </div>
            </div>

            <div class="top-menu-perform__item">
              <div class="top-menu-perform__item-name">Название блока полей</div>
              <div class="top-menu-perform__block">
                <v-card class="top-menu__input">
                  <v-card-text>
                    <v-text-field
                      :loading="loading"
                      :placeholder="'Текстовое поле'"
                      density="compact"
                      hide-details
                      single-line
                      @click:append-inner="onClick"
                    ></v-text-field>
                  </v-card-text>
                </v-card>
              </div>
              <div class="top-menu-perform__block top-menu-perform__block-date">
                <v-date-input
                  v-model="model"
                  label="Дата"
                  max-width="368"
                  prepend-icon=""
                  prepend-inner-icon="$calendar"
                ></v-date-input>
              </div>
              <div class="top-menu-perform__block">
                <div class="top-menu-perform__block-items">
                  <v-number-input
                    :reverse="false"
                    controlVariant="default"
                    label="Цена От"
                    :hideInput="false"
                    :inset="false"
                    variant="filled"
                  ></v-number-input>
                <v-number-input
                  :reverse="false"
                  controlVariant="default"
                  label="Цена До"
                  :hideInput="false"
                  :inset="false"
                  variant="filled"
                ></v-number-input>
                </div>
                
              </div>
              <div class="top-menu-perform__block">
                <v-select
                  v-model="favorites"
                  :items="states"
                  hint="Pick your favorite states"
                  label="Поле с чекбоксами"
                  multiple
                  persistent-hint
                ></v-select>
              </div>
              <div class="top-menu-perform__block">
                <v-card class="top-menu__input">
                  <v-card-text>
                    <v-text-field
                      :loading="loading"
                      :placeholder="'Текстовое поле'"
                      density="compact"
                      hide-details
                      single-line
                      @click:append-inner="onClick"
                    ></v-text-field>
                  </v-card-text>
                </v-card>
              </div>
              <div class="top-menu-perform__block">
                <div class="top-menu-perform__fields">
                  <div>
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn
                          variant="text"
                          v-bind="props"
                        >
                        Свернутый блок полей
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in list1"
                          :key="index"
                          :value="index"
                        >
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                  <div>
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn
                          variant="text"
                          v-bind="props"
                        >
                        Свернутый блок полей
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in list2"
                          :key="index"
                          :value="index"
                        >
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                  <div>
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn
                          variant="text"
                          v-bind="props"
                        >
                        Свернутый блок полей
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in list3"
                          :key="index"
                          :value="index"
                        >
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </div>
              <div class="top-menu-perform__block"></div>
            </div>

            <div class="top-menu-perform__item">
              <div class="top-menu-perform__tag-block">
                <div class="top-menu-perform__item-name">Теги</div>
                <div class="top-menu-perform__tag-input">
                  <v-text-field
                    :rules="rules"
                    hide-details="auto"
                    :placeholder="'Найти тег'"
                  ></v-text-field>
                </div>
                <div class="top-menu-perform__tags">
                  <div class="top-menu-perform__tag">
                    <v-chip
                      v-for="(item, i) in tags"
                      :key="i"
                      :model-value="true"
                      class="ma-2"
                      closable
                    >
                      {{ item }}
                    </v-chip>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="top-menu__activity">
        <div class="d-flex justify-space-around">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                variant="text"
                v-bind="props"
              >
              <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="top-menu__btn-add bg-btn">
        <v-btn>Добавить</v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loaded: false,
      loading: false,
      model: null,
      favorites: [],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
      ],
      items: [
        { title: 'Настройка воронки' },
        { title: 'Импорт данных' },
        { title: 'Экспорт данных' },
        { title: 'Массовые действия' },
        { title: 'Сортировка по дате' },
        { title: 'Сортировка по ....' },
      ],
      list1: [
        { title: 'items1' },
        { title: 'items2' },
        { title: 'items3' },
        { title: 'items4' },
      ],
      list2: [
        { title: 'items1' },
        { title: 'items2' },
        { title: 'items3' },
        { title: 'items4' },
      ],
      list3: [
        { title: 'items1' },
        { title: 'items2' },
        { title: 'items3' },
        { title: 'items4' },
      ],
      tags: ['tag1','tag2','tag3','tag4','tag5'],
      choice: [
        {
          text: 'Все записи',
          value: 1,
        },
        {
          text: 'Только мои',
          value: 2,
        },
        {
          text: 'Просроченные',
          value: 3,
        },
      ],
      toggleBtn: 1,
      value: 'btn-horizontal',
      isOpenMenu: false,
    }
  },
  methods: {
    menuOpen() {
      this.isOpenMenu = !this.isOpenMenu
    },
    onClick () {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  }
}
</script>

<style lang="scss">
  .top-menu {
    background-color: var(--white);
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    justify-content: space-between;
    gap: 10px;
    @media(max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    &__input {
      &.top-menu__input {
        box-shadow: none;
        padding: 0;
      }
    }
    &__name {
      font-size: 26px;
      font-weight: 500;
      margin-right: 25px;
      @media(max-width: 767px) {
        font-size: 18px;
      }
    }
    &__item {
      display: flex;
      align-items: center;
      &:first-child {
        @media(max-width: 767px) {
          flex-wrap: wrap;
        }
      }
      &:last-child {
        @media(max-width: 1200px) {
          margin-left: auto;
          order: 3;
        }
        @media(max-width: 767px) {
          flex-wrap: wrap;
          flex-direction: column;
          margin-left: 0;
          margin: 0 auto;
          align-items: center;
        }
      }
    }
    &__choice {
      width: 100%;
      .v-field__overlay {
        background: 0!important;
      }
    }
    &__btn-position {
      .v-btn {
        padding: 0;
        height: auto;
        font-size: 25px;
        min-width: auto;
        min-height: auto;
        transition: 0.3s;
        @media(max-width: 767px) {
          font-size: 18px;
        }
        &.v-btn--active {
          color: var(--btn);
          background: transparent;
          .v-btn__overlay {
            background: 0;
          }
        }
      }
    }
    &__btn-add {}
    &__write {
      margin-left: 50px;
      white-space: nowrap;
      @media(max-width: 767px) {
        margin-left: 0;
      }
      @media(max-width: 767px) {
        margin-bottom: 10px;
      }
    }
    &__activity {
      margin-right: 10px;
      @media(max-width: 767px) {
        margin: 0 0 10px;
      }
      .v-btn {
        min-width: auto;
        min-height: auto;
        padding: 0 5px;
      }
    }
    &__perform {
      margin: 0 10px 0 10px;
      position: relative;
      button {
        transition: 0.3;
        &.is-open {
          background-color: var(--strip);
          color: var(--white);
        }
      }
    }
  }
  .top-menu-perform {
    opacity: 0;
    appearance: none;
    pointer-events: none;
    position: absolute;
    height: 0;
    contain: layout;
    top: 100%;
    z-index: 2000;
    left: -750px;
    background-color: var(--white);
    box-shadow: 0 0 5px rgba(#000, 0.5);
    transition: 0.4s;
    transform: scale(0.9);
    @media(max-width: 1200px) {
      left: auto;
      right: 0;
    }
    &.is-open {
      opacity: 1;
      appearance: auto;
      pointer-events: auto;
      height: auto;
      transform: scale(1);
      transform-origin: center top;
      height: auto;
    }
    &__block {
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      .v-card-text {
        padding: 0;
      }
      .v-input__details {
        min-height: 0;
        display: none;
      }
      .v-input {
        max-width: 100%!important;
        width: 100%;
        height: 50px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        border-radius: 4px;
        input {
          height: 50px;
        }
      }
    }
    &__block-date {
      .v-input input {
        height: auto;
      }
    }
    &__block-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      @media(max-width: 1200px) {
        grid-template-columns: 1fr;
      }
    }
    &__box {
      display: grid;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      gap: 20px;
      width: 850px;
      height: 100%;
      overflow-y: auto;
      padding: 20px;
      @media(max-width: 1200px) {
        width: 70vw;
        height: 50vh;
        grid-template-columns: 1fr;
      }
      @media(max-width: 575px) {
        width: 100%;
      }
    }
    &__item {
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        background-color: var(--black);
        position: absolute;
        right: -10px;
        top: 0;
        @media(max-width: 1200px) {
          display: none;
        }
      }
      &:last-child {
        &::after {display: none;}
      }
    }
    &__item-name {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
      color: var(--text);
    }
    &__choice {
      .v-card--variant-elevated {
        box-shadow: none;
      }
      .v-list-item {
        border-bottom: solid 1px;
        margin-bottom: 5px;
      }
    }
    &__fields {
      div {
        width: 100%;
      }
      .v-btn {
        width: 100%;
        padding: 0 5px;
        margin-bottom: 10px;
        position: relative;
        text-align: left;
        justify-content: start;
        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background-color: var(--black);
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
</style>
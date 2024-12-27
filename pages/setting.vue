<template>
  <div class="wrapper">
    <div class="setting my-5">
      <div class="setting__wrap">
        
        <div class="setting__item setting-item">
          <div class="setting-item__block">
            <div class="setting__name">
              Название записи
              <span>14.01.2024 17:34:34</span>
            </div>
            <div class="setting-item__block">
              <div class="setting-item__choice">
                Название воронки
                <!-- <v-select
                  label="Название статуса / колонки"
                  :items="['item', 'item', 'item', 'item', 'item', 'item']"
                  variant="solo-filled"
                ></v-select> -->
                <v-select :items="select" item-title="name" label="Название статуса / колонки">
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props" :subtitle="item.raw.department"></v-list-item>
                  </template>
                </v-select>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="setting-item-sense">
                <div 
                  class="setting-item-sense__item"
                  v-for="(item, i) in nameStatus"
                  :key="i"
                >
                  <p>{{ item.field }}</p>
                  <span></span>
                  <p>{{ item.sense }}</p>
                </div>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="setting-item-sense">
                <div class="setting-item__block-name">Название блока полей</div>
                <div 
                  class="setting-item-sense__item"
                  v-for="(item, i) in nameFeld"
                  :key="i"
                >
                  <p>{{ item.field }}</p>
                  <span></span>
                  <p>{{ item.sense }}</p>
                </div>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="setting-item__block-name">Изображение записи</div>
              <div class="preview">
                <div class="preview__img">
                  <img src="@/assets/img/product.jpeg" alt="...">
                </div>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="setting-item__block-name">Видео превью</div>
              <div class="preview">
                <div class="preview__iframe">
                  <iframe src=""></iframe>
                </div>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="setting-item__block-name">Видео превью</div>
              <div class="preview">
                <div class="preview__video">
                  <video src=""></video>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="setting__item setting-item">
          <div class="setting__title">Название</div>
          <div class="setting-main">
            <div class="setting-main__photo">
              <img src="@/assets/img/picter.jpeg" alt="...">
            </div>
            <div class="setting-main__description content">
              <p>
                Lorem Ipsum (читается как «Лорем Ипсум») — это текст-заглушка, текст-рыба, обычно используемый дизайнерами и веб-разработчиками для демонстрации того, в каких местах сайта или приложения будет находиться текст, какого он будет объема и каким шрифтом написан.
              </p>
              <p>
                Lorem Ipsum (читается как «Лорем Ипсум») — это текст-заглушка, текст-рыба, обычно используемый дизайнерами и веб-разработчиками для демонстрации того, в каких местах сайта или приложения будет находиться текст, какого он будет объема и каким шрифтом написан.
              </p>
              
            </div>
            <div class="setting-main__btns">
              <v-btn>Сохранить</v-btn>
              <v-btn>Опубликовать</v-btn>
              <v-btn>В&nbsp;черновики</v-btn>
            </div>
          </div>
        </div>

        <div class="setting__item setting-item">
          <div class="setting__name">Связи</div>
          <div class="setting-item__core">
            <div class="setting-item__core-name">
              СУЩНОСТЬ 1
              <v-btn variant="tonal" size="x-small">+</v-btn>
            </div>
            <div class="setting-item__block">
              <div class="setting-item__block">
                <div class="widget">
                  <div class="widget__bg">
                    <video src=""></video>
                  </div>
                </div>
                <div class="setting-item__block-name">Название виджета</div>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="widget">
                <div class="widget__bg">
                  <img src="@/assets/img/product.jpeg" alt="...">
                </div>
              </div>
              <div class="setting-item__block-name">Название виджета</div>
            </div>
            <div class="setting-item__block">
              <div class="widget">
                <div class="widget__bg">
                  <video src=""></video>
                </div>
              </div>
              <div class="setting-item__block-name">Название виджета</div>
            </div>
          </div>
          <div class="setting-item__core">
            <div class="setting-item__core-name">
              СУЩНОСТЬ 2
              <v-btn variant="tonal" size="x-small">+</v-btn>
            </div>
            <div class="setting-item__block">
              <div class="setting-item__block">
                <div class="widget">
                  <div class="widget__bg">
                    <video src=""></video>
                  </div>
                </div>
                <div class="setting-item__block-name">Название виджета</div>
              </div>
            </div>
            <div class="setting-item__block">
              <div class="widget">
                <div class="widget__bg">
                  <img src="@/assets/img/product.jpeg" alt="...">
                </div>
              </div>
              <div class="setting-item__block-name">Название виджета</div>
            </div>
            <div class="setting-item__block">
              <div class="widget">
                <div class="widget__bg">
                  <video src=""></video>
                </div>
              </div>
              <div class="setting-item__block-name">Название виджета</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameStatus: [
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        
      ],
      nameFeld: [
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
        {
          field: 'Поле',
          sense: 'Значение'
        },
      ],
      select: [
        {
          name: 'John',
          department: 'Marketing',
        },
        {
          name: 'Jane',
          department: 'Engineering',
        }
      ],
    }
  }
}
</script>

<style lang="scss">
  .setting {
    &__block {}
    &__wrap {
      background-color: var(--white);
      padding: 25px 20px;
      display: grid;
      grid-template-columns: 0.6fr 1fr 0.4fr;
      justify-content: space-between;
      gap: 40px;
      @media(max-width: 1200px) {
        grid-template-columns: 1fr;
      }
    }
    &__name {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 40px;
      color: var(--text);
      span {
        font-size: 16px;
        color: var(--text);
        display: block;
      }
    }
    &__title {
      font-size: 40px;
      font-weight: 500;
      color: var(--text);
      margin-bottom: 35px;
    }
    &__item {
      overflow-y: auto;
      height: calc(100vh - 90px);
      padding-right: 13px;
      @media(max-width: 1200px) {
        overflow-y: hidden;
        height: auto;
        &:nth-child(1) {
          order: 2;
        }
        &:nth-child(2) {
          order: 1;
        }
        &:nth-child(3) {
          order: 3;
        }
      }
    }
  }
  .setting-main {
    display: flex;
    flex-direction: column;
    height: 100%;
    height: calc(100% - 100px);
    &__btns {
      margin-top: auto;
      button {
        margin-left: 15px;
        margin-bottom: 10px;
      }
    }
    &__description {
      margin-bottom: 40px;
    }
  }
  .setting-item {
    &__block {
      margin-bottom: 20px;
    }
    &__block-name {
      font-weight: 500;
      margin-bottom: 5px;
    }
    &__core {

    }
    &__core-name {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      button {
        border-radius: 50%;
        min-width: 20px;
        min-height: 20px;
        margin-left: auto;
      }
    }
  }
  .setting-item-sense {
    &__item {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 5px;
      span {
        flex: 1 0 auto;
        border-bottom: dotted 1px var(--text);
        margin: 0 2px 7px;
      }
    }
  }
</style>